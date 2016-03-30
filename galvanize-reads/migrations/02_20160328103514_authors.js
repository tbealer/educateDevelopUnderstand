exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', function(table) {
    table.increments();
    table.text('biography');
    table.string('picture');
    table.string('firstname');
    table.string('lastname');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors');
};
