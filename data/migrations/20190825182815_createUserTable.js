exports.up = function(knex) {
  return knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"').then(() => {
    return knex.schema.createTable("user-creds", table => {
      table
        .uuid("id")
        .primary()
        .notNullable()
        .defaultTo(knex.raw("uuid_generate_v4()"));
      table
        .string("username")
        .notNullable()
        .unique();
      table.string("password").notNullable();
    });
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("user-creds");
};
