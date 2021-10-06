module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      avatar: String,
      username: String,
      email: String,
      password: String,
      ownerTweets: Array
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const User = mongoose.model("user", schema);
  return User;
};