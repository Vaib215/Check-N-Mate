const express = require("express");
const dotenv = require("dotenv").config();
const cors = require('cors')
const { errorHandler } = require("./middleware/error.middleware");
const { connectDB } = require("./config/db");
const port = process.env.PORT || 5000;

connectDB()

const app = express();
app.use(cors({
  option : '*'
}))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/user', require('./routes/user.routes'))
app.use('/post', require('./routes/post.routes'))
app.use(errorHandler);
app.use((req, res) => {
  res.status(404).json({
    "message" : "Page Not Found"
  })
})

app.listen(port, () => console.log(`Server is running at ${port}`));
