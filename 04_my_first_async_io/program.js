fs = require('fs');
filename = process.argv[2]

fs.readFile(filename, 'utf8', function (err, data) {
  if (err) throw error;
  var lines = data.split('\n').length - 1;
  console.log(lines);
});