// Import mysql connection object
var connection = require("./connection.js");

var query;
var orm = {
    selectAll: function(tableName, callback){
        query = "select burger_name from " + tableName + ";";
        connection.query(query, function(error, result){
            if(error){
                throw error;
            }
            callback(result);
        });
    },
    insertOne: function(tableName, burgerName, callback){
        query = "insert into " + tableName + "(burger_name,devoured) values (" + burgerName + ",false)" + ";";
        connection.query(query, function(error, result){
            if(error){
                throw error;
            }
            callback(result);
        });
    },
    updateOne: function(tableName, burgerName, callback){
        query = "update " + tableName + "set devoured=true where burger_name=" + burgerName + ";";
        connection.query(query, function(error, result){
            if(error){
                throw error;
            }
            callback(result);
        });
    }
};

// Export orm
module.exports = orm;