
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cohorts', tbl => {
    //set primary key with auto increment
    tbl.increments();

    //set name
    tbl
    .string('name', '128')
    .notNullable()
    .unique();

    //timestamps for the data
    tbl.timestamps(true, true);
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cohorts');
};
