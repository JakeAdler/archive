require('dotenv').config();

if (!process.env.MONGO_PASSWORD) {
    return console.log('Missing mongo env variable')
}

const uri = `mongodb+srv://application:${process.env.MONGO_PASSWORD}@rovehome-ljlcb.mongodb.net/test?retryWrites=true`;

const DataBaseName = 'RoveBase';

module.exports = {
    URI: uri,
    Data_Base_Name: DataBaseName
};