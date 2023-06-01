var mysql = require('mysql2');
const auth = require('../../config.js');

var db = mysql.createConnection({
  host: auth.HOST,
  user: auth.USER,
  password: auth.PASSWORD,
  database: auth.DB,
  port: auth.PORT
});

db.connect(function (err) {
  if (err) throw err;
  console.log('Database Connected!');
});

module.exports = db;