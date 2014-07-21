var fs = require('fs');
var p = require('path');

var path = process.argv[2];
var file_extension = "." + process.argv[3];

fs.readdir(path, function(err, list) {
  list.forEach(function(file) {
    extension = p.extname(file);
    if (extension == file_extension) { console.log(file); }
  });
});
