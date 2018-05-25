// Require mysql
var mysql = require("mysql");

// Create connection object
var connection = ({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

// Open database connection
connection.connect(function(err){
    if(err){
        console.error("error connecting to the database: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
})

// Export connection
module.exports(connection);