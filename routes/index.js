const { Router } = require('express');
const controllers=require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))
router.get('/activityDetails/activity/:activity', controllers.getAllActivityDetailsByActivity)
router.get('/activityDetails', controllers.getAllActivityDetails)
// router.get('/activityDetails/:search', controllers.getActivityDetails)
router.post('/activityDetails', controllers.createActivityDetails)
router.get('/activityDetails/destination/:id', controllers.getAllActivityDetailsByDestination)
router.get('/activityDetails/:id', controllers.getActivityDetailsById)
router.put('/activityDetails/:id', controllers.updateActivityDetails)
router.delete('/activityDetails/:id', controllers.deleteActivityDetails)
router.get('/destination', controllers.getAllDestination)
router.post('/destination', controllers.createDestination)
router.get('/destination/:id', controllers.getDestinationById)
router.put('/destination/:id', controllers.updateDestination)
router.delete('/destination/:id', controllers.deleteDestination)

module.exports = router;