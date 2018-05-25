// Require Express
var express = require("express");

// Require the model associated to this controller
var model = require("../models/model.js");

// Define the Router
var router = express.Router();

// Define the default "Get /" Route and return the index.handlebars
router.get("/", function(request, response){
    response.render("index");
});

module.exports = router;