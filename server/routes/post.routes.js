const express = require('express');
const router = express.Router();

const {
  getPost,
  addPost,
  addRequestToPost,
  approveRequest,
  leavePost,
  archivePost
} = require('../controller/post.controller');
const { protect } = require('../middleware/auth.middleware');

router.get('/', protect, getPost);
router.post('/', protect, addPost);
router.put('/request/:postId', protect, addRequestToPost);
router.post('/requestApproval', protect, approveRequest);
router.post('/leavePost', protect, leavePost);
router.post('/archivePost', archivePost)

module.exports = router;
