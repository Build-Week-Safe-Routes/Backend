// Update with your config settings.
require("dotenv").config();

const dbConnection = process.env.DATABASE_URL;

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      port: process.env.PGPORT,
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

  production: {
    client: "pg",
    connection: dbConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
