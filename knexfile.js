// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'firstQuiz',
      user:     'luciana',
      password: 'lu1234'
    }
  },

    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations'
    }

};
