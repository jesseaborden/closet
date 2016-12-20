const authenticationRouter = require('express').Router();
const authenticationController = require('../../controllers/authenticationController');
const passportService = require('../../services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignin = passport.authenticate('local', {session: false});

authenticationRouter.post('/signin', requireSignin, authenticationController.signIn)
authenticationRouter.post('/signup', authenticationController.signup);

module.exports = authenticationRouter;