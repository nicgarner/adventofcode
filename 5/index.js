var fs = require('fs');

console.log('Day 5:');

fs.readFile('input.txt', 'utf8', function(err, data) {
    var words = data.split(/\n/);
    var niceWords = 0;
    words.forEach(function(word) {
        var vowels = word.match(/[aeiou]/g);
        var doubles = word.match(/(.)\1/g);
        var disallowed = word.match(/ab|cd|pq|xy/g);

        if (vowels && vowels.length > 2 && doubles && doubles.length > 0 && !disallowed) {
            niceWords++;
        }
    });
    console.log('  1. ' + niceWords + ' nice words');

    niceWords = 0;
    words.forEach(function(word) {
        var doublePairs = word.match(/(.{2}).*\1/g);
        var doubleLetters = word.match(/(.).\1/g);

        if (doublePairs && doubleLetters) {
            niceWords++;
        }
    });
    console.log('  2. ' + niceWords + ' nice words');
});