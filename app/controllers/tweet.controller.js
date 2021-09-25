const db = require("../models");
const Tweet = db.tweets;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Tweet
    const tweet = new Tweet({
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
    });
  
    // Save Tutorial in the database
    tweet
      .save(tweet)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tweet."
        });
      });
  };
  
  // Retrieve all Tweets from the database.
  exports.findAll = (req, res) => {
    const theTweets= req.query.title;
    var condition = theTweets ? { theTweets: { $regex: new RegExp(theTweets), $options: "i" } } : {};
  
    Tweet.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };
  
  // Find a single Tweet with an id
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Tweet.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Tweet with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Tweet with id=" + id });
      });
  };
  
  // Update a Tweet by the id in the request
  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Tweet.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Tweet with id=${id}. Maybe Tweet was not found!`
          });
        } else res.send({ message: "Tweet was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tweet with id=" + id
        });
      });
  };
  
  // Delete a Tweet with the specified id in the request
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Tweet.findByIdAndRemove(id, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Tweet with id=${id}. Maybe Tweet was not found!`
          });
        } else {
          res.send({
            message: "Tweet was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tweet with id=" + id
        });
      });
  };
  
  // Delete all Tutorials from the database.
  exports.deleteAll = (req, res) => {
    Tweet.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Tweets were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tweets."
        });
      });
  };
  
