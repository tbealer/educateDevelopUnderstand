
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function(table) {
    table.increments();
    table.text('description');
    table.string('title');
    table.string('year');
    table.string('picture');
    table.string('genre');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};
