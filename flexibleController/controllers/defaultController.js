
var DefaultController = function () {

};


DefaultController.prototype.findAll = function (req, res) {
  //you can do some default when this controller not find or 
  res.status(404).end("No such api");
};

DefaultController.prototype.findByIndex = function (req, res) {
  res.status(404).end("No such api");
};


DefaultController.prototype.add = function (req, res) {
  res.status(404).end("No such api");
};

DefaultController.prototype.update = function (req, res) {
	res.status(404).end("No such api");
};

DefaultController.prototype.updateById = function (req, res) {
	res.status(404).end("No such api");
};

DefaultController.prototype.remove = function (req, res) {
	res.status(404).end("No such api");
};


module.exports = DefaultController;
