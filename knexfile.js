// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true, //for sqlite
    debug: true, //adds information to the console when you run something
    migrations: { //add migration information
      directory: './migrations',
      tableName: 'lambdamigrations'
    },
    seeds: { //add seed information
      directory: './seeds'
    }
  }
};
