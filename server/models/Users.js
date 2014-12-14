'use strict';
var mongoose = require('mongoose'),
    encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({
    firstName: {type: String, required: '{PATH} is required!'},
    lastName: {type: String, required: '{PATH} is required'},
    username: {
        type: String,
        required: '{PATH} is required',
        unique: true
    },
    salt: {type: String, required: '{PATH} is required'},
    hashedPwd: {type: String, required: '{PATH} is required'},
    roles: [String]
});

userSchema.methods = {
    authenticate: function(passwordToMatch) {
        return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashedPwd;
    }
};

var User = mongoose.model('User', userSchema);

exports.createDefaultUsers = function() {
    User.find({}).exec(function(err, collection) {
        if(collection.length === 0) {
            var salt,
                hash;
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'password');

            User.create({
                firstName: 'first',
                lastName: 'last',
                username: 'changeme',
                salt: salt,
                hashedPwd: hash,
                roles: ['superadmin', 'admin']
            }, function(err, user) {
                if(err) {
                    console.log(err);
                } else {
                    console.log(user);
                }
            });
        }
    });
};
