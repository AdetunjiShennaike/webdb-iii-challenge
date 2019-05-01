//import express and router
const express = require('express');
const router = express.Router();

//import database model
const students = require('../models/studentModel');

//error returns
const sendError = (msg, res) => {
  res.status(500).json({ error: `${msg}`});
};

const missingError = res => {
  res.status(404).json({ error: 'This action does not exist'});
};

const newError = (sts, msg, res) => {
  res.status(sts).json({ error: `${msg}` })
}

//middleware
const nameCheck = () => {

}

//CRUD requests

//export
module.exports = router;