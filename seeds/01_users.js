
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        { first_name: 'Weston',
          last_name: 'Gibler',
          email: 'giblerw@colorado.edu',
          username: 'giblerw',
          password: '123'
      },
      ]);
    });
};
