const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema ({
    location: {
        type: {
          type: String, 
          enum: ['Point'], 
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
      }
},
{
  collection: 'customers'
})
userSchema.index({location: '2dsphere'})
let User = mongoose.model('User', userSchema);
module.exports = User;