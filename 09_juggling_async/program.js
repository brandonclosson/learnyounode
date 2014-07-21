var http = require('http');
var concatStream = require('concat-stream');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var callback_counter = 0;

//my way

http.get(url1, function(response) {
  response.pipe(concatStream(function(data) {
    console.log(data.toString());
    get_url2();
  }));
});

function get_url2() {
  http.get(url2, function(response) {
    response.pipe(concatStream(function(data) {
      console.log(data.toString());
      get_url3();
    }));
  });
}

function get_url3() {
  http.get(url3, function(response) {
    response.pipe(concatStream(function(data) {
      console.log(data.toString());
    }));
  });
}

// the learnyounode way

// var count = 0;
// var results = [];

// function printResults() {
//   for (var i=0; i<3; i++) {
//     console.log(results[i]);
//   }
// }

// function httpGet(index) {
//   http.get(process.argv[2 + index], function(response) {
//     response.pipe(concatStream(function(data) {
//       results[index] = data.toString();
//       count++;
//       if (count == 3) { printResults(results) }
//     }));
//   });
// }

// for (var i = 0; i < 3; i++) {
//   httpGet(i);
// }