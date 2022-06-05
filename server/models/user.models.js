const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name : {
    type : String,
    required : [true, 'Please add a name']
  },
  email : {
    type : String,
    required : [true, 'Please add a email'],
    unique: true
  },
  password : {
    type : String,
    required : [true, 'Please add a password']
  },
  college: {
    type : String, 
    required : [true, 'Please add your college name']
  }, 
  skills : {
    type : Array
  },
  rating : {
    type : Number,
    required : [true, 'Please include the rating']
  },
  username : {
    type : String,
    required : [true, 'Please add the username'],
    unique: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('user', userSchema)