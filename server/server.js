const http = require('http');
const app = require('./app');

const PORT = process.env.PORT || 1111;
const server = http.createServer(app)
server.listen(PORT, () => {
  console.log(`Server running at ${1111}`)
})