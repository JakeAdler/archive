const vendors = require('../models/vendor')
const utils = require('./utils');

exports.getVendors = function (req, res) {
  if (!req.body || !req.body.location) {
    res.json({result: "Error: No user location provided"});
    return;
  }

  let userLocation = req.body.location;
  let radius = req.body.radius || 5 // Default Radius.

  // Geospatial query 
  vendors.find({
      location: {
        $nearSphere: {
          $geometry: userLocation,
          $maxDistance: radius * utils.METERS_PER_MILE
        }
      }
    })
    .then(result => res.json(result))
    .catch(err => {
      console.log('Error while making geospatial query');
      console.log(err);
      // Any errors that occur here must be converted to a string since
      // the error message bombs out when attempting to serialize.
      res.json({result: err.toString()});
    });
}