require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: 'http://www.recipepuppy.com/api/'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};
