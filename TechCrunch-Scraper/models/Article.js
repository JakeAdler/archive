let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let articleSchema = new Schema({

  title: {
    type: String,
    required: true
  },

  link: {
    type: String,
    required: true
  },

  saved: {
      type: Boolean,
      required: true,
      default: false
  },

  comments: {
    type: [String],
    required: false
  },
  
  image: {
    type: String,
    required: false
  }
});

let Article = mongoose.model("Article", articleSchema);

module.exports = Article;
