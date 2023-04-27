var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'amazon',
    user: 'root',
    password: 'ROO_*Meow123'
});

module.exports = connection;