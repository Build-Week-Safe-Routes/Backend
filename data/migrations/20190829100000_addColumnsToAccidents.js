exports.up = function(knex) {
  return knex.schema.table("accidents", table => {
    table.string("STATE", 128);
    table.integer("FUNC_SYS_NUM");
    table.integer("TYP_INT_NUM");
    table.integer("MAN_COLL_NUM");
  });
};

exports.down = function(knex) {
  return knex.schema.table("accident", table => {
    table.dropColumn("STATE");
    table.dropColumn("FUNC_SYS_NUM");
    table.dropColumn("TYP_INT_NUM");
    table.dropColumn("MAN_COLL_NUM");
  });
};
