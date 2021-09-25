// module.exports = {
//   url: "mongodb://localhost:27017/bezkoder_db"
// };

module.exports = {
  url: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zbswd.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`
};

