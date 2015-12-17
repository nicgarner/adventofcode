var fs = require('fs');

fs.readFile('input.txt', 'utf8', function(err, data) {
    console.log('Day 3:');
    if (data) {
        var visitedHouses = [[0,0]];
        var directions = data.split('');
        directions.forEach(function(direction) {
            var currentHouse = visitedHouses[visitedHouses.length-1];
            var nextHouse;
            if (direction === "^") {
                nextHouse = [currentHouse[0], currentHouse[1]+1];
            }
            if (direction === "v") {
                nextHouse = [currentHouse[0], currentHouse[1]-1];
            }
            if (direction === ">") {
                nextHouse = [currentHouse[0]+1, currentHouse[1]];
            }
            if (direction === "<") {
                nextHouse = [currentHouse[0]-1, currentHouse[1]];
            }
            visitedHouses.push(nextHouse);
        });
        visitedHouses.sort();
        var uniqueHouses = 1;
        for (var h = 1; h < visitedHouses.length; h++) {
            if (visitedHouses[h][0] !== visitedHouses[h-1][0] || visitedHouses[h][1] !== visitedHouses[h-1][1]) {
                uniqueHouses++;
            }
        }
        console.log('  1. ' + uniqueHouses + ' unique houses');

        var santasVisitedHouses = [[0,0]];
        var roboSantasVisitedHouses = [[0,0]];
        directions.forEach(function(direction) {
            if (santasVisitedHouses.length === roboSantasVisitedHouses.length) {
                var currentHouse = santasVisitedHouses[santasVisitedHouses.length-1];
                var nextHouse;
                if (direction === "^") {
                    nextHouse = [currentHouse[0], currentHouse[1]+1];
                }
                if (direction === "v") {
                    nextHouse = [currentHouse[0], currentHouse[1]-1];
                }
                if (direction === ">") {
                    nextHouse = [currentHouse[0]+1, currentHouse[1]];
                }
                if (direction === "<") {
                    nextHouse = [currentHouse[0]-1, currentHouse[1]];
                }
                santasVisitedHouses.push(nextHouse);
            }
            else {
                var currentHouse = roboSantasVisitedHouses[roboSantasVisitedHouses.length-1];
                var nextHouse;
                if (direction === "^") {
                    nextHouse = [currentHouse[0], currentHouse[1]+1];
                }
                if (direction === "v") {
                    nextHouse = [currentHouse[0], currentHouse[1]-1];
                }
                if (direction === ">") {
                    nextHouse = [currentHouse[0]+1, currentHouse[1]];
                }
                if (direction === "<") {
                    nextHouse = [currentHouse[0]-1, currentHouse[1]];
                }
                roboSantasVisitedHouses.push(nextHouse);
            }
        });
        var visitedHouses = santasVisitedHouses.concat(roboSantasVisitedHouses);
        visitedHouses.sort();
        var uniqueHouses = 1;
        for (var h = 1; h < visitedHouses.length; h++) {
            if (visitedHouses[h][0] !== visitedHouses[h-1][0] || visitedHouses[h][1] !== visitedHouses[h-1][1]) {
                uniqueHouses++;
            }
        }
        console.log('  2. ' + uniqueHouses + ' unique houses');
    }
});