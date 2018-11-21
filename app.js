var lineByLine = require("line-by-line");
var lr = lineByLine('openthesaurus.txt');
var words = [];
var foundWords;
for (var i = 2; true; i++) {
    if (process.argv[i] == null) {
        break;
    }
    words.push(process.argv[i]);
}
if (words.length == 0) {
    console.log("Please specify words");
}
else {
    var _loop_1 = function (i) {
        foundWords = "";
        lr.on('line', function (line) {
            // 'line' contains the current line without the trailing newline character.    
            if (line.search("/" + words[i] + "/")) {
                foundWords += line + "\n";
            }
        });
        if (foundWords == "") {
            console.log("No matches found for word: " + words[i]);
        }
        else {
            console.log(words[i] + ":\n" + foundWords);
        }
    };
    for (var i = 0; i < words.length; i++) {
        _loop_1(i);
    }
}
