const { Router } = require('express');
const controllers=require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))
router.get('/activityDetails', controllers.getAllActivityDetails)
router.post('/activityDetails', controllers.createActivityDetails)
router.get('/activityDetails/:id', controllers.getActivityDetailsById)
router.put('/activityDetails/:id', controllers.updateActivityDetails)
router.delete('/activityDetails/:id', controllers.deleteActivityDetails)

module.exports = router;