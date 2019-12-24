/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const passport = require('passport');
const jwt = require('jsonwebtoken');

module.exports = {
    login: function(req, res) {
        passport.authenticate('local', function(err, user, info){
            if((err) || (!user)) {
                let message = info.message 
                    ? info.message 
                    : 'Login Failed! Check username or password.';
                return res.send({
                    message: message,
                    code: 401
                });
            }
            req.logIn(user, function(err) {
                if(err) res.send(err);
                const token = jwt.sign(user, 'secretkey');
                return res.json({'token': token, 'user': user});
            });
        })(req, res);
    },

    logout: function(req, res) {
        req.logout();
        res.redirect('/');
    }
};


