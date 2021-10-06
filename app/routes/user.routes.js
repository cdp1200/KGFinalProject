module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tweet
    router.post("/", users.createUser);
  
    // Retrieve User by email
    router.get("/", users.loginUser);
  
    // Create a new Tweet
    // router.delete("/", tweets.deleteAll);
  
    app.use("/api/user", router);
  };