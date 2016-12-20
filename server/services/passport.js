const passport = require('passport');
const User = require('../models/user_model');
const config = require('../../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt-nodejs');

const localLogin = new LocalStrategy({ usernameField: 'email' }, function(email, password, done){

    User.findOne({where: {email:email}})
    .then(function(user){
        bcrypt.compare(password, user.password, function(err, isMatch){
            if(err) return done(err);
            if(!isMatch) return done(null, false);

            return done(null, user);
        });
    })
    .catch(function(err){
        return done(err);
    });
})

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
passport.use(localLogin);