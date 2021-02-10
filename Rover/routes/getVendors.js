const router = require('express').Router();
const getVendorController= require('../controllers/getVendorController');

/**
 * Get vendors in X radius around Y location
 */
router.post('/', getVendorController.getVendors);

module.exports = router;