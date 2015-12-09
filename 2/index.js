var fs = require('fs');

fs.readFile('input.txt', 'utf8', function(err, data) {
    console.log('Day 2:');
    if (data) {
        var totalPaper = 0;
        var totalRibbon = 0;
        var boxes = data.split(/\n/);
        boxes.forEach(function(box) {
            var dimensions = box.split(/x/);
            var areas = [
                    dimensions[0] * dimensions[1],
                    dimensions[1] * dimensions[2],
                    dimensions[2] * dimensions[0]
                ];
            var smallestArea = Math.min.apply(null, areas);
            var paper = 2*areas[0] + 2*areas[1] + 2*areas[2] + smallestArea;

            totalPaper += paper;

            dimensions.sort(function(a, b) { return a - b });
            var ribbon = 2*dimensions[0] + 2*dimensions[1] + dimensions[0] * dimensions[1] * dimensions[2];
            totalRibbon += ribbon;
        });

        console.log('  1.', totalPaper + ' sq ft');
        console.log('  2.', totalRibbon + ' ft');
    }
});