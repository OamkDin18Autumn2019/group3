var express = require('express');
  var router = express.Router();
  var activities = require('../models/activities');


  router.get('/:id?', function(req, res, next) {
    if (req.params.id) {
      activities.getById(req.params.id, function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    } else {
        activities.get(function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    }
  });

  router.post('/', function(req, res, next) {
    activities.add(req.body, function(err, count) {
      if (err) {
        res.json(err);
      } else {
        res.json(req.body); //or return count for 1 & 0
      }
    });
  });
  router.delete('/:id', function(req, res, next) {
    activities.delete(req.params.id, function(err, count) {
      if (err) {
        res.json(err);
      } else {
        res.json(count);
      }
    });
  });
  router.put('/:id', function(req, res, next) {
    activities.update(req.params.id, req.body, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  module.exports = router;