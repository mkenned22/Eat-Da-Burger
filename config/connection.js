// Require mysql
var mysql = require("mysql");
require('dotenv').config();

// Create connection object
var connection = mysql.createConnection({
    host: process.env.DB_host,
    user: process.env.DB_user,
    password: process.env.DB_password,
    database: process.env.DB_database
})

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