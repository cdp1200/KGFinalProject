module.exports = app => {
    const tweets = require("../controllers/tweet.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tweet
    router.post("/", tweets.create);
  
    // Retrieve all Tweets
    router.get("/", tweets.findAll);
  
    // Retrieve a single Tweet with id
    router.get("/:id", tweets.findOne);
  
    // Update a Tweet with id
    router.put("/:id", tweets.update);
  
    // Delete a Tweet with id
    router.delete("/:id", tweets.delete);
  
    // Create a new Tweet
    router.delete("/", tweets.deleteAll);
  
    app.use("/api/tweets", router);
  };