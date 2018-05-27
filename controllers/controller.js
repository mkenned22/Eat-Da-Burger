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

// router.get("/", function(req, res) {
//     cat.all(function(data) {
//       var hbsObject = {
//         cats: data
//       };
//       console.log(hbsObject);
//       res.render("index", hbsObject);
//     });
//   });

// router.post("/api/cats", function(req, res) {
//     cat.create([
//       "name", "sleepy"
//     ], [
//       req.body.name, req.body.sleepy
//     ], function(result) {
//       // Send back the ID of the new quote
//       res.json({ id: result.insertId });
//     });
//   });
  
//   router.put("/api/cats/:id", function(req, res) {
//     var condition = "id = " + req.params.id;
  
//     console.log("condition", condition);
  
//     cat.update({
//       sleepy: req.body.sleepy
//     }, condition, function(result) {
//       if (result.changedRows == 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
//   });
  

module.exports = router;