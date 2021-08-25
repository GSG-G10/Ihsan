const connection = require('../connection');

module.exports = (name, password, email) => connection.query('INSERT INTO USERS(name, password, email) VALUES ($1, $2, $3)', [name, password, email]);
