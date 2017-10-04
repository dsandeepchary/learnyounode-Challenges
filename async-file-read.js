// Asynchrounous way of reading file

var fs = require('fs')
var newLines = undefined;

function printNewLines(callback) {
  fs.readFile(process.argv[2], function doneReading(err, fileContents) {
    stringContent = fileContents.toString(); 
    newLines = stringContent.split('\n').length - 1;
    callback()
  })
}

function logMyNewLines() {
  console.log(newLines);
}

printNewLines(logMyNewLines);
