const passport = require('passport');
const User = require('../models/user_model');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
    User.findById(payload.sub)
    .then(function(user){
        if(user){
            return done(null, user);
        }
        else {
            return done(null, false);
        }
    })
    .catch(function(err){
        return done(err, false);
    });
});

passport.use(jwtLogin);