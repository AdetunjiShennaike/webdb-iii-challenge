
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', tbl => {
    //set primary as auto increment
    tbl.increments();

    //set name
    tbl
    .string('name', '128')
    .notNullable()

    //set foreign key
    tbl
    .integer('cohort_id')
    .unsigned()
    .references('id')
    .inTable('cohorts')
    .notNullable()
    .onDelete('CASCADE')
    .onUpdate('CASCADE')

    //set date stamps
    tbl.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('students');
};
