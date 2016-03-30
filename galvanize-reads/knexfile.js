module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/galvanizereads'
  },

  production: {
    client: 'pg',
    connection: 'postgres://'
  }
};
