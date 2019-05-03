exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", function(tbl) {
    tbl.increments().unique();

    tbl.string("desc").notNullable();

    tbl.string("notes");

    tbl
      .integer("person_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("Home")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");

    tbl.boolean("completed");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
