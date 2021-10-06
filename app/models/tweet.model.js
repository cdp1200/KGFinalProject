module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        image: String,
        description: String,
        owner: String
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Tweet = mongoose.model("tweet", schema);
    return Tweet;
  };