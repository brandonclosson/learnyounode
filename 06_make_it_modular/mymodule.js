var fs = require('fs')
var p = require('path')

module.exports = function (dir_name, file_extname, callback) {
  var output = [];
  file_extname = "." + file_extname;
  fs.readdir(dir_name, function(err, list) {
    if (err) { return callback(err); }
    list.forEach(function(filename) {
      extension = p.extname(filename);
      if (extension == file_extname) { output.push(filename); }
    });
    callback(null, output);
  });
}