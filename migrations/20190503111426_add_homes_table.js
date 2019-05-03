
exports.up = function(knex, Promise) {
  return knex.schema.createTable("Home", function(tbl) {
    tbl.increments().unique();

    tbl.string("person", 128).notNullable();

    tbl.string("desc").notNullable();
    tbl.boolean("completed").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("home");
};