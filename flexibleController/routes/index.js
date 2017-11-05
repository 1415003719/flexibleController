var express = require('express');

var controller = require('./../controllers/index').init();
var router = express.Router();


router.all('/*', function (req, res, next) {
  console.log('Now Time: ', new Date().toLocaleString(), req.originalUrl);
  next();
});

/*********************************************
 * routes
**********************************************/

router.post('/:moduleName', function (req, res) {
  controller(req).add(req, res);
});

router.get('/:moduleName', function (req, res) {
  controller(req).findAll(req, res);
});

router.get('/:moduleName/:id', function (req, res) {
  controller(req).findById(req, res);
});

router.put('/:moduleName', function (req, res) {
  controller(req).update(req, res);
});

router.put('/:moduleName/:id', function (req, res) {
  controller(req).updateById(req, res);
});

router.delete('/:moduleName/:id', function (req, res) {
  controller(req).remove(req, res);
});


module.exports = router;
