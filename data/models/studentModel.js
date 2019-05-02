//import knex information from db config
const db = require('../dbConfig');

module.exports = {
  get,
  getById,
  insert,
  update,
  remove
}

function get() {
  return db('students');
}

function getById(id) {
  let query = db('students'); //the cohort table

  if(id) {
    return query
    .where('id', id)
    .first();
  }
}

function insert(name) {
  return db('students')
  .insert(name)
  .then(ids => {
    return getById(ids[0]); //returns the generated item by using the [0](id) to search by id 
  })
}

function update(id, change) {
  return db('students')
  .where({ id })
  .update( change )
  .then(ids => {
    return getById(ids[0]); //returns the generated item by using the [0](id) to search by id 
  })
}

function remove(id) {
  return db('students')
  .where('id', id)
  .del()
  .then(ids => {
    return getById(ids[0]); //returns the generated item by using the [0](id) to search by id 
  })
}