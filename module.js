// to import values from another file & acess those values
const { people, age } = require('./people');

console.log(people);
console.log(age);

// to import the built-in OS file & fetch details about it
const os = require('os');
console.log(os.platform(), os.homedir());