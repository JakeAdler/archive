// Pull in routes
const defaultRoute = require('./default');
const getVendorsRoute = require('./getVendors');

module.exports = function(app) {

    // Attach routes to path
    app.use('/', defaultRoute);
    app.use('/getVendors', getVendorsRoute);

}