const json = require("../../DS/data.json");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("accidents")
    .del()
    .then(async function() {
      // Inserts seed entries

      const accidentPromises = [];
      json.forEach(accident => {
        accidentPromises.push(insertAcc(knex, accident));
      });
      return Promise.all(accidentPromises);
    });
};

const insertAcc = (knex, accident) => {
  return knex("accidents").insert(accident);
};
