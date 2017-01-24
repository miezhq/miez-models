'use strict';

const {
  USER_STATUS_PENDING,
  USER_STATUS_ACTIVE,
  DEF_USER_STATUS
} = require('./constants');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  email:  {
    type: String,
    unique: true,
  },
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  password: {
    type: String,
    select: false,
  },
  password_salt: {
    type: String,
    select: false,
  },
  status: {
    type: String,
    default: DEF_USER_STATUS,
    enum: [
      USER_STATUS_ACTIVE,
      USER_STATUS_PENDING,
    ],
  }
}, {
  toObject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true
  },
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

module.exports = UserSchema;
