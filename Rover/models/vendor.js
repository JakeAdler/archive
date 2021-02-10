const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let vendorSchema = new Schema ({
    name: String,
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
  collection: 'vendors'
})
vendorSchema.index({location: '2dsphere'})
let Vendor = mongoose.model('Vendor', vendorSchema);
module.exports = Vendor;