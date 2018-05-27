var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback){
        orm.selectAll("burgers",function(response){
            callback(response);
        });
    },
    insertOne: function(callback){
        orm.insertOne("burgers",burgerName,function(response){
            callback(response);
        });
    },
    updateOne: function(callback){
        orm.updateOne("burgers",burgerName,function(response){
            callback(response);
        });
    }
};

module.exports = burger;