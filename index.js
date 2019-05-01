//import env file and server file
require('dotenv').config();
const server = require('./server');

//create a dynamic port
const PORT = process.env.PORT || 4300

//run/listen for the port

server.listen(PORT, () => {
  console.log(`\n You're working on port ${PORT}! \n`)
})