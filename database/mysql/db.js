var mysql = require('mysql2');

var db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'questionanswers'
});

db.connect(function (err) {
  if (err) throw err;
  console.log('Database Connected!');
});

module.exports = db;