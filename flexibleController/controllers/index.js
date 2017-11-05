
module.exports.init = function (options) {
  options = options || {};
  return function (req) {
    module = req.params.moduleName;
    if (module) {
      try {
        var ModuleController = require('./' + module + 'Controller');
      } catch (e) {
        console.log(e);
        var ModuleController = require('./defaultController');
      }
    } else {
      var ModuleController = require('./defaultController');
    }
    return new ModuleController();
  }
};


