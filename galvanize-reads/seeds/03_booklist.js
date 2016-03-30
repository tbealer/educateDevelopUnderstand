
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('booklist').del(), 

    // Inserts seed entries
    knex('booklist').insert({
      bookid: 1, 
      authorid:1 }),
    knex('booklist').insert({
      bookid: 2, 
      authorid:2 }),
    knex('booklist').insert({
      bookid: 3, 
      authorid: 3})
    );
};
