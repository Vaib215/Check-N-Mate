const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
  name : {
    type : String,
    required: true
  },
  description : {
    type : String,
    required: true
  },
  topics : {
    type: [String],
    required: true
  },
  teamSize : {
    type : Number,
    required: true
  },
  authorId : {
    type : mongoose.Types.ObjectId,
    required : true
  },
  teamMembers : {
    type : [mongoose.Types.ObjectId],
    required: true
  },
  teamRequests: {
    type: [mongoose.Types.ObjectId]
  },
  isActive : {
    type: Boolean,
    required: true
  },
  endDate : {
    type : Date
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('post', postSchema)