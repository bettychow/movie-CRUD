
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {id: 1, title: 'Cinema Paradiso', director: 'Giuseppe Tornatore', year: 1988 , rating: 9},
        {id: 2, title: `It's a Wonderful Life`, director: 'Frank Capra', year: 1946, rating: 8},
        {id: 3, title: `Schindler's List`, director: 'Steven Spielberg', year: 1993, rating: 9}
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('movies_id_seq', (SELECT MAX(id) FROM movies));`
      );
    })
};
