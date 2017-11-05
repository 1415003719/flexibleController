
// User class
var User = function (options) {
  options = options || {};

  this._id = options._id || null;
  this.name = options.name || "";
  this.age = options.age || null;
  this.sex = options.sex || null;
  this.tel = options.tel || "";
  this.email = options.email || "";
};

// methods
User.findAll = function (options, callback) {
  opions = options || {};

  //do something....find in DB

  var data = [
    new User({_id:"1", name: "nameA", age: 21, sex: "男", tel: "14789562563", email: "nameA@httpeace.com"}),
    new User({_id:"2", name: "nameB", age: 22, sex: "女", tel: "25112236641", email: "nameB@httpeace.com"}),
    new User({_id:"3", name: "nameC", age: 23, sex: "男", tel: "21252899472", email: "nameC@httpeace.com"})
  ];
  var err = null;
  callback(err, data);

};

module.exports = User;
