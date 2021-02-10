const router = require('express').Router();
const defaultRouteController = require('../controllers/defaultRouteController')

/**
 * Default route if location services permissions are not given
 */
router.get('/', defaultRouteController.defaultRouteController);

module.exports = router;