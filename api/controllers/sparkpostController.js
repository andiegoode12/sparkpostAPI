'use strict';

// use mongoose to interact with MongoDB instance
var mongoose = require('mongoose'),
  entry = mongoose.model('Sparkpost'); // model defined in sparkpostModel.js

  // retrieve all entries from DB using mongoose .find
  exports.get_all_entries = function(req, res) {
      entry.find({}, function(err, entry) {
        if (err) {
            res.send(err);
        }
        res.json(entry);
      });
  }

  // retrieve all entries from DB using mongoose .find passing the name we wish to find
  exports.get_entry = function(req, res) {
    entry.find(req.params.name, function(err, entry) {
      if (err) {
          res.send(err);
      }
      res.json(entry);
    });
 };

  // create a new entry using mongoose .save
  exports.create_entry = function(req, res) {
    var new_entry = new entry(req.body);
    new_entry.save(function(err, entry) {
      if (err) {
          res.send(err);
      }
      res.json(entry);
    });
  };
  
  // update an existig entry using mongoose .findOneAndUpdate, where we find the first instance of the param name
  exports.update_entry = function(req, res) {
    entry.findOneAndUpdate(req.params.name, req.body, {new: true}, function(err, entry) { // passing {new: true} will return the updated json object
        if (err) {
            res.send(err);
        }
        res.json(entry);
      });
  };

  // Delete all entries, used for testing 
  exports.delete_all_entries = function(req, res) {
      entry.remove({}, function(err, entry) {
        if (err) {
            res.send(err);
        }
        res.json({message: 'All entries successfully deleted'});
      });
  }


