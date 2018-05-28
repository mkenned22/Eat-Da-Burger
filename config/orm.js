// Import mysql connection object
var connection = require("./connection.js");

var query;
var orm = {
    selectAll: function(tableName, callback){
        query = "select * from burgers where devoured=0";
        connection.query(query, function(error, result){
            if(error){
                throw error;
            }
            callback(result);
        });
    },
    insertOne: function(tableName, burgerName, callback){
        query = "insert into " + tableName + '(burger_name,devoured) values ("' + burgerName + '",false)' + ';';
        connection.query(query, function(error, result){
            if(error){
                throw error;
            }
            callback(result);
        });
    },
    updateOne: function(tableName, id, callback){
        query = "update burgers set devoured=1 where id=" + id + ";";
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