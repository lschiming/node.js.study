var mysql = require('mysql');

var conn = function() {
  console.log('Conexão estabelecida.');
  return mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'portal_noticias'
  });
}

module.exports = function() {
  return conn;
}