// Require Express
var express = require("express");

// Require the model associated to this controller
var burger = require("../models/burger.js");

// Define the Router
var router = express.Router();

// Define the default "Get /" Route and return the index.handlebars
router.get("/", function(request, response){
    burger.selectAll(function(data){
        var object = {
            burgers: data
        };
        console.log(object);
        response.render("index",object);
    });
});

router.post("/api/burgers", function(request, response) {
    console.log("request to cook burger " + request.body.name);
    burger.insertOne(request.body.name, function(result) {
      // Send back the ID of the new quote
      response.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", function(request, response) {
    var id = request.params.id;
    console.log("ready to eat burger " + id);
  
    console.log("id", id);
  
    burger.updateOne(id, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return response.status(404).end();
      } else {
        response.status(200).end();
      }
    });
  });
  

module.exports = router;