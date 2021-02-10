let Mongoose = require('mongoose');
let Schema = Mongoose.Schema

let savedSchema = new Schema ({
    title: String,
    link: String,
    description: String,
    image: String,
    alt: String
})

let Saved = Mongoose.model('Article', savedSchema)

module.exports = Saved;