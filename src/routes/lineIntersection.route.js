const router = require('express').Router();
const auth = require('../middleware/authorization');
const lineIntersection = require('../controllers/lineIntersction.controller');

router.post('/intersect',auth.authMiddleware,auth.bodyValidator,lineIntersection);

module.exports = router;