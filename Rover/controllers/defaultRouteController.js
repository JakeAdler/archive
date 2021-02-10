const vendors = require('../models/vendor');
const utils = require('../controllers/utils');

exports.defaultRouteController = function (req, res) {
    let defaultLocation = {
        type: "Point",
        coordinates: [-118.414536, 34.008332]
    };
    let radius = 10

    // Geospatial query 
    vendors.find({
            location: {
                $nearSphere: {
                    $geometry: defaultLocation,
                    $maxDistance: radius * utils.METERS_PER_MILE
                }
            }
        })
        .then(result => res.json(result))
        .catch(err => {
            // TODO: Graceful degradation
            console.log('Error while making geospatial query');
            console.log(err);
            res.json(err);
        });
}