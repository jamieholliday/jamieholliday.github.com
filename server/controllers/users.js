'use strict';
var User = require('mongoose').model('User'),
    encrypt = require('../utilities/encryption');

exports.getUsers = function(req, res) {
    User.find({}, {'firstName':1, 'lastName':1, 'roles':1, 'username':1})
    .exec(function(err, users) {
        res.send(users);
    });
};

exports.getUserById = function(req, res) {
    User.find({_id:req.params.id}, {'firstName':1, 'lastName':1, 'roles':1, 'username':1}).exec(function(err, user) {
        if(err) {
            res.send({error: err, message: 'Error'});
        } else {
            console.log(user);
            res.send(user[0]);
        }
    });
}

exports.createUser = function(req, res, next) {
    var userData = req.body;
    userData.username = userData.username.toLowerCase();
    userData.salt = encrypt.createSalt();
    userData.hashedPwd = encrypt.hashPwd(userData.salt, userData.password);

    User.create(userData, function(err, user) {
        if(err) {
            if(err.toString().indexOf('E11000') > -1) {
                err = new Error('Duplicate Username');
            }
            res.status(400);
            return res.send({reason: err.toString()});
        }
        req.logIn(user, function(err) {
            if(err) {
                return next(err);
            }
            res.send(user);
        });
    });
};

exports.updateUser = function(req, res) {
    var userUpdates = req.body;
    if(req.user._id !== userUpdates._id && !req.user.roles.indexOf('admin')) {
        res.status(403);
        return res.end();
    }

    req.user.firstName = userUpdates.firstName;
    req.user.lastName = userUpdates.lastName;
    req.user.username = userUpdates.username;

    console.log('pw', userUpdates.password);

    if(userUpdates.password && userUpdates.password.length > 0) {
        req.user.salt = encrypt.createSalt();
        console.log(req.user.salt, userUpdates.password);
        req.user.hashedPwd = encrypt.hashPwd(req.user.salt, userUpdates.password);
    }

    req.user.save(function(err) {
        if(err) {
            res.status(400);
            return res.send({
                reason: err.toString()
            });
        }
        res.send({message: 'Success'});
    });
};
