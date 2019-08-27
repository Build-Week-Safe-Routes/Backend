const json = require("../../DS/safe-routes-app-df.json");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("accidents")
    .del()
    .then(async function() {
      // Inserts seed entries

      await knex("accidents").insert(json.slice(0, 3000));
    });
};
