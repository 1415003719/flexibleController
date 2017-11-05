
var User = require('./../models/user');

var UserController = function () {

};


UserController.prototype.findAll = function (req, res) {
  var options = {};
  options.req = req;

	findAllCallback(options, function (err, data) {
    if(err){
      res.end(err);
    }
    res.json({"result": data});
  });
};

UserController.prototype.findById = function (req, res) {
  methodNotAllow(res);
};


UserController.prototype.add = function (req, res) {
	methodNotAllow(res);
};

UserController.prototype.update = function (req, res) {
	methodNotAllow(res);
};

UserController.prototype.updateById = function (req, res) {
	methodNotAllow(res);
};

UserController.prototype.remove = function (req, res) {
	methodNotAllow(res);
};



var findAllCallback = function (options, callback) {
  var req = options.req;
  var query = req.query || {};

	User.findAll(query, callback);
};



var methodNotAllow = function (res) {
  var err = {code : 405, message : 'method not allow'};
	res.status(err.code).end(err.message);
};


/*********************************************
 * Export as a module
**********************************************/
module.exports = UserController;
