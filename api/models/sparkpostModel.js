'use strict';
// use mongoose to interact with MongoDB instance
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// setup schema
var SparkpostSchema = new Schema({
  name: {
    type: String,
    required: 'Enter the name'
  },
  age: {
    type: Number,
    default: 0
  }
});

// define model
module.exports = mongoose.model('Sparkpost', SparkpostSchema);