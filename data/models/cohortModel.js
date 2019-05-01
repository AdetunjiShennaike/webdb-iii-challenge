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
  return db('cohorts');
}

function getById(id) {
  let query = db('cohorts'); //the cohort table

  if(id) {
    return query
    .where('id', id)
    .first();

    // const promises = [query, this.getRelatedStudents(id)]; // left side is the cohort table, right side is the student table connected by foreign key

    // return Promise.all(promises).then(function(results) {
    //   let [cohort, students] = results;

    //   if (cohort) {
    //     cohort.students = students;

    //   }
    // })
  }
}

function insert(name) {
  return db('cohorts')
  .insert(name)
  .then(ids => {
    return getById(ids[0]); //returns the generated item by using the [0](id) to search by id 
  })
}

function update(id, change) {
  return db('cohorts')
  .where({ id })
  .update( change )
  .then(ids => {
    return getById(ids[0]); //returns the generated item by using the [0](id) to search by id 
  })
}

function remove(id) {
  return db('cohorts')
  .where('id', id)
  .del()
  .then(ids => {
    return getById(ids[0]); //returns the generated item by using the [0](id) to search by id 
  })
}