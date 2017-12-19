
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('user', (table)=>{
      table.increments('id');
      table.string('first_name');
      table.string('last_name');
      table.string('email');
      table.string('username');
      table.string('password');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('user')
  ])
};
