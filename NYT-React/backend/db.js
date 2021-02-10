let mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/nyt-react',
{ useNewUrlParser: true })
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once("open", function() {
    console.log("Mongoose connected");
});

module.exports = db;