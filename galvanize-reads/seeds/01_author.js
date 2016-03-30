
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('authors').del(), 

    // Inserts seed entries
    knex('authors').insert(
      {
        biography: 'Don spent his life in constant pursuit of friends.', 
        picture: 'https://i.ytimg.com/vi/YczX_cb824E/maxresdefault.jpg',
        firstname: 'Don',
        lastname: 'Johnson'

        }
      ),
      
      knex('authors').insert(
      {
        biography: 'Famous for writing the same book many different ways and making boat loads of cash.', 
        picture: 'http://www.boomerslife.org/dan_brown_da_vinci_code_author.jpg',
        firstname: 'Dan',
        lastname: 'Brown'

        }
      ),
        
        knex('authors').insert(
      {
        biography: 'Frost had a very cold demeanor', 
        picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Robert_Frost_NYWTS_4.jpg/220px-Robert_Frost_NYWTS_4.jpg',
        firstname: 'Robert',
        lastname: 'Frost'

        }
      )

  );
};
