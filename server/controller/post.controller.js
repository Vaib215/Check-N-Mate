const asyncHandler = require('express-async-handler');

const User = require('../models/user.models');
const Post = require('../models/post.models');

const getPost = asyncHandler(async (req, res) => {
  let filters = req.query.filters;
  let posts = [];
  if(!filters) {
    posts = await Post.find()
  }
  else {
    filters = filters.split(',')
    posts = await Post.find({topics: {$all: filters}});
  }
  res.status(200).json(posts);
});

const addPost = asyncHandler(async (req, res) => {
  const {
    name,
    description,
    topics,
    teamSize,
  } = req.body;

  if(!name || !description || !topics || !teamSize) {
    res.status(400)
    throw new Error("Please add or check all the fields")
  }

  const post = await Post.create({
    name: name,
    description: description,
    topics: topics,
    teamSize: teamSize,
    authorId : req.user.id,
    teamMembers : [req.user.id],
    teamRequests: [],
    isActive: true
  });

  res.status(200).json(post)
});

const addRequestToPost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.postId);
  if (!post) {
    res.status(400);
    throw new Error("Post not found");
  }
  if(post.authorId == req.user.id) {
    res.status(400)
    throw new Error("Are you living in paraller world!!")
  }
  post.teamRequests.forEach(e => {
    if(e == req.user.id) {
      res.status(400)
      throw new Error("You had already sent the request!!")
    }
  })
  post.teamMembers.forEach(e => {
    if(e == req.user.id) {
      res.status(400)
      throw new Error("You are already in team!!")
    }
  })
  if(post.teamSize == post.teamMembers.length) {
    res.status(400)
    throw new Error("Team already filled")
  }

  // console.log(post)
  const updatedPost = await Post.findByIdAndUpdate(req.params.postId, {$push: {teamRequests: req.user.id}})
  console.log(updatedPost)
  res.status(200).json(updatedPost);
})

const approveRequest = asyncHandler(async (req, res) => {
  const postId = req.query.postId;
  const reqUserId =  req.query.userId;
  const isApproved = req.query.isApproved;

  const post = await Post.findById(postId);
  if (!post) {
    res.status(400);
    throw new Error("Post not found");
  }

  const updatedTeamRequest = post.teamRequests.filter(e => e != reqUserId)
  let updatedPost = await Post.findByIdAndUpdate(postId, {$set : {teamRequests : updatedTeamRequest}})

  if(isApproved !='false') {
    if(post.teamSize == post.teamMembers.length) {
      res.status(400)
      throw new Error("Team already filled")
    }
    updatedPost = await Post.findByIdAndUpdate(postId, {$push : {teamMembers : reqUserId}})
  }
  res.status(200).json(updatedPost)
})

const leavePost = asyncHandler(async (req, res) => {
  const postId = req.query.postId;
  const userId = req.user.id;

  const post = await Post.findById(postId);
  if (!post) {
    res.status(400);
    throw new Error("Post not found");
  }

  const updatedTeamMembers = post.teamMembers.filter(e => e != userId)
  const updatedPost = await Post.findByIdAndUpdate(postId, {$set : {teamMembers: updatedTeamMembers}})
  res.status(200).json(updatedPost)
})

const archivePost = asyncHandler(async (req, res) => {
  const postId = req.query.postId;

  const post = await Post.findById(postId);
  if (!post) {
    res.status(400);
    throw new Error("Post not found");
  }

  const updatedPost = await Post.findByIdAndUpdate(postId, {$set: {isActive: false}})
  res.status(200).json(updatedPost)
})

module.exports = {
  getPost,
  addPost,
  addRequestToPost,
  approveRequest,
  leavePost,
  archivePost
}