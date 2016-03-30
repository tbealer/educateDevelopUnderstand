
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('books').del(), 

    // Inserts seed entries
    knex('books').insert(
      {
        description: 'Tom Hanks fights the Pope', 
        title: 'The DaVinci Code',
        year: '2005',
        picture: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Davincicodesoundtrack.jpg',
        genre: 'Historical Fiction'
      }),
    
    knex('books').insert(
      {
        description: 'A collection of Robert Frosts poetry.', 
        title: 'Birches',
        year: '1929',
        picture: 'http://d.gr-assets.com/books/1312063543l/138193.jpg',
        genre: 'Poetry'
      }),
    
    knex('books').insert(
      {
        description: 'A collection of stories to guide humanity', 
        title: 'The Bible',
        year: '~200 AD',
        picture: 'http://images.christianpost.com/full/58645/diogo-morgado-the-bible-series.jpg?w=615',
        genre: 'Religious'
      })
    

  );
};
