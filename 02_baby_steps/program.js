var argument_array = process.argv;
var total = 0;

for(var i = 2; i < argument_array.length; i++) {
  total += +argument_array[i];
}

console.log(total);