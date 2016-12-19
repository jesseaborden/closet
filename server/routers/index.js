const router = require('express').Router();
const authenticationRouter = require('./authentication/authenticationRouter.js');

router.use('/authentication', authenticationRouter)

module.exports = router;