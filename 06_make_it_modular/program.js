var mymodule = require('./mymodule');
var path = process.argv[2];
var file_extension = process.argv[3];

mymodule(path, file_extension, function(err, data) {
  if (err) { console.log("error"); }
  data.forEach( function(d) {
    console.log(d);
  });
});