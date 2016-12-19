authenticationRouter = require('express').Router();

authenticationRouter.get('/', function(req, res){
    res.send("inside authenticationRouter");
})

module.exports = authenticationRouter;