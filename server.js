//import libraries and dependencies
const express = require('express');
const helmet = require('helmet');
// const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config()

//import routes and env items
const studentRoute = require('./routes/studentRoute')
const cohortRoute = require('./routes/cohortRoute')
const response = process.env.TEST

//define server
const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());
// server.use(morgan('dev'));


//create middleware


//run routes
server.use('/api/students', studentRoute)
server.use('/api/cohorts', cohortRoute)

//check server status
server.get('/', (req, res) => {
  res.status(200).json(`${response}`)
})

//export file
module.exports = server