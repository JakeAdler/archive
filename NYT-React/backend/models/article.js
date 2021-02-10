let Mongoose = require('mongoose');
let Schema = Mongoose.Schema

let articleSchema = new Schema ({
    title: String,
    link: String,
    description: String,
    image: String,
    alt: String
})

let Article = Mongoose.model('Article', articleSchema)

module.exports = Article;