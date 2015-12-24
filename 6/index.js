var fs = require('fs');

console.log('Day 6:');

fs.readFile('input.txt', 'utf8', function(err, data) {
    var size = 1000;
    var grid1 = [];
    var grid2 = [];
    for (var x = 0; x < size; x++) {
        grid1[x] = [];
        grid2[x] = [];
        for (var y = 0; y < size; y++) {
            grid1[x][y] = 0;
            grid2[x][y] = 0;
        }
    }

    var instructions = data.split(/\n/);

    instructions.forEach(function(instruction) {
        var parts = instruction.split(' ');

        var command;
        var coord1;
        var coord2;

        if (parts[0] === 'toggle') {
            command = 'toggle';
            coord1 = parts[1].split(',');
            coord2 = parts[3].split(',');
        }
        else {
            command = parts[1];
            coord1 = parts[2].split(',');
            coord2 = parts[4].split(',');
        }

        coord1[0] = parseInt(coord1[0]);
        coord1[1] = parseInt(coord1[1]);
        coord2[0] = parseInt(coord2[0]);
        coord2[1] = parseInt(coord2[1]);

        for (var x = coord1[0]; x <= coord2[0]; x++) {
            for (var y = coord1[1]; y <= coord2[1]; y++) {
                if (command === 'on') {
                    grid1[x][y] = 1;
                    grid2[x][y]++;
                }
                else if (command === 'off') {
                    grid1[x][y] = 0;
                    grid2[x][y]--;
                    if (grid2[x][y] < 0) {
                        grid2[x][y] = 0;
                    }
                }
                else {
                    if (grid1[x][y] === 0) {
                        grid1[x][y] = 1;
                    }
                    else {
                        grid1[x][y] = 0;
                    }
                    grid2[x][y] = grid2[x][y] + 2;
                }
            }
        }
    });

    var on = 0;
    var luminance = 0;
    for (var x = 0; x < size; x++) {
        for (var y = 0; y < size; y++) {
            on += grid1[x][y];
            luminance += grid2[x][y];
        }
    }
    console.log('    1.', on, 'lights on');
    console.log('    2.', luminance, 'luminance');
});