let lineByLine = require("line-by-line");

let lr = lineByLine('openthesaurus.txt');

let words: String[] = [];

let foundWords: String;

for (let i = 2; true; i++) {
    if (process.argv[i] == null) {
        break;
    }
    words.push(process.argv[i]);
}
if(words.length==0){
    console.log("Please specify words");
}else{
    for (let i = 0; i < words.length; i++) {
        foundWords="";
        lr.on('line', function (line: String) {
            // 'line' contains the current line without the trailing newline character.    
                if (line.search("/" + words[i] + "/")) {
                    foundWords+=line+"\n";
                }  
        });
        if(foundWords==""){
            console.log("No matches found for word: " + words[i]);
        }else{
            console.log(words[i]+":\n" + foundWords);
        }
    }
    
}
