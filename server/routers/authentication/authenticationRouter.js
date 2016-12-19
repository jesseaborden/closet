authenticationRouter = require('express').Router();
authenticationController = require('../../controllers/authenticationController');

authenticationRouter.get('/', function(req, res){
    res.send("inside authenticationRouter");
})

authenticationRouter.post('/signup', authenticationController.signup);

module.exports = authenticationRouter;