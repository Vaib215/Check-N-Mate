const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require("express-async-handler");
const User = require('../models/user.models')

const registerUser = asyncHandler(
  async (req, res) => {
    const { name, email, password, college, skills, rating, username } = req.body

    if(!name || !email || !password || !college || !rating || !username) {
      res.status(400)
      throw new Error('Please Enter All the Fields')
    }

    const userExists = await User.findOne({username})
    if(userExists) {
      res.status(400)
      throw new Error('User already Exist')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt) 

    const user = await User.create({
      name,
      email, 
      password: hashedPassword,
      college, 
      skills,
      rating, 
      username
    })

    if(user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        college: user.college,
        skills: user.skills,
        rating: user.rating,
        username: user.username,
        token: generateToken(user._id) // used to get verify password
      })
    } else {
      res.status(400)
      throw new Error('Invalid User Data')
    }
  }
)

const loginUser = asyncHandler(
  async (req, res) => {
    const {username, password} = req.body
    const user = await User.findOne({username})

    if(user && (await bcrypt.compare(password, user.password))) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        college: user.college,
        skills: user.skills,
        rating: user.rating,
        username: user.username,
        token: generateToken(user._id) // used to get verify password
      })
    } else {
      res.status(400)
      throw new Error('Invalid Credintials')
    }
  }
)

const getUser = asyncHandler(
  async (req, res) => {
    const { _id, name, email, college, skills, rating, username } = await User.findById(req.user.id)

    res.status(200).json({
      id: _id,
      name,
      email,
      college,
      skills,
      rating,
      username
    })
  }
)

const generateToken = id => {
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn : '30d',
  })
}

module.exports = {
  registerUser,
  loginUser,
  getUser
}