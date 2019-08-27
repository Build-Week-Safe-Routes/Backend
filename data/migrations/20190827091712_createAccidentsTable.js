exports.up = function(knex) {
  return knex.schema.createTable("accidents", accidents => {
    accidents.increments();
    accidents.string("TWAY_ID", 128);
    accidents.string("TWAY_ID2", 128);
    accidents.string("COUNTY", 128);
    accidents.decimal("LATITUDE", 10, 8);
    accidents.decimal("LONGITUD", 11, 8);
    accidents.integer("MONTH", 128);
    accidents.integer("DAY", 128);
    accidents.integer("YEAR", 128);
    accidents.string("DAY_WEEK", 128);
    accidents.string("LGT_COND", 128);
    accidents.string("WEATHER", 128);
    accidents.integer("WRK_ZONE", 128);
    accidents.integer("FATALS", 128);
    accidents.integer("PEDS", 128);
    accidents.string("MAN_COLL", 128);
    accidents.string("FUNC_SYS", 128);
    accidents.string("TYP_INT", 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("accidents");
};
