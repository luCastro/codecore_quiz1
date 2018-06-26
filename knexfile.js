// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'cluckr',
      username: "luciana",
      password: "lu1234"
    }
  },

    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    }
};
