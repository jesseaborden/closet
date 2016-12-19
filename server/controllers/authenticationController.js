const authenticationController = {};
const User = require('../models/user_model');
const bcrypt = require('bcrypt-nodejs');

authenticationController.signup = function(req, res, next){
    const email = req.body.email;
    let password = req.body.password;
    console.log("e and p", email, password)

    if(!password || !email) return res.status(422).send( {error: "valid email and password are required"} );

    bcrypt.genSalt(10, function(err, salt){
        if(err) return next(err);

        bcrypt.hash(password, salt, null, function(err, hash){
            password = hash;
        });
    });

    User.findOne({where: {email: email}}) 
    .then(function(emailFound){
        if(emailFound){
            res.status(422).send( {error: "email is in use"} );
        }
        else {
            User.create({
                email: email,
                password: password
            }).then(function(response){
                res.send(response);
            });
        }
    }).catch(function(err){
        return next(err)
    });
}

module.exports = authenticationController;