// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true,
    debug: true,
    migrations: {
      directory: './migrations',
      tableName: 'lambdamigrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};
