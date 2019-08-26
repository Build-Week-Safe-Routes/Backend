const db = require("../../data/dbConfig.js");

module.exports = {
  add,
  find,
  findUser,
  findByID
};

function find() {
  return db("user-creds");
}

async function add(user) {
  const id = await db("user-creds").insert(user, ["id"]);
  return findByID(id[0].id);
}

function findUser(username) {
  return db("user-creds").where("username", username);
}

async function findByID(id) {
  return db("user-creds")
    .where({ id })
    .first()
    .select("id", "username");
}
