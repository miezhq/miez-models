'use strict';

const mongoose = require('mongoose');
const UserSchema = require('./UserSchema');
const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
