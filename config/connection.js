// Require mysql
var mysql = require("mysql");

// Create connection object
var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'burgers_db'
});

// Open connection
connection.connect(function(error){
    if(error){
        console.error("error connecting to the database: " + error.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;