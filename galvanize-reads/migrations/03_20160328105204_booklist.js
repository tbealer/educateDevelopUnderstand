
exports.up = function(knex, Promise) {
  return knex.schema.createTable('booklist', function(table) {
    table.integer('bookid');
    table.foreign('bookid').references('id').inTable('books');
    table.integer('authorid');
    table.foreign('authorid').references('id').inTable('authors');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('booklist');
};
