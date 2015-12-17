var md5 = require('md5');

console.log('Day 4:');

var number = 1;
var cont = true;
console.time("     Execution time");
while(cont === true) {
    var hash = md5('iwrupvqb' + number);
    if (hash.slice(0,5) === '00000') {
        cont = false;
        console.log('  1. ' + number);
    }
    else {
        number++;
    }
}

number = 1;
cont = true;
console.time("     Execution time");
while(cont === true) {
    var hash = md5('iwrupvqb' + number);
    if (hash.slice(0,6) === '000000') {
        cont = false;
        console.log('  2. ' + number);
    }
    else {
        number++;
    }
}