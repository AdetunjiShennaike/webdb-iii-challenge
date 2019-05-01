//import knex and knexfile
const knex = require('knex');
const knexConfig = require('../knexfile');

//export to be used in multiple files instead of having to call repeatedly
module.exports = knex(knexConfig.development);