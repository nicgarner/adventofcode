var fs = require('fs');

fs.readFile('input.txt', 'utf8', function(err, data) {
    console.log('Day 1:');
    if (data) {
        var up = data.match(/\(/g).length;
        var down = data.match(/\)/g).length;
        console.log('  1. Floor:', up - down);

        var floor = 0;
        for (var i = 0; i < data.length; i++) {
            if (data[i] === '(') {
                floor++;
            }
            else {
                floor--;
            }
            if (floor === -1) {
                console.log('  2. Character:', i+1);
                break;
            }
        }
    }
});