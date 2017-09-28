var fs = require('fs');
var fileBuffContent = fs.readFileSync(process.argv[2]);
var fileStringContent = fileBuffContent.toString();
var newLines = fileStringContent.split('/n');
console.log(newLines-1);
