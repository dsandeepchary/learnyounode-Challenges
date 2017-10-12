//Reading the directory and printing filtered files

var fs = require('fs');
var path = require('path');
var filteredFiles = [];

function printFiles(callback) {
  fs.readdir(process.argv[2], function doneReading(err, files) { 	
    for(var i = 0; i < files.length; i++) {	
    if(path.extname(files[i]) === '.' + process.argv[3]) {
    filteredFiles.push(files[i]) ;
       }
     }
    callback();
  });
}

function logFiles() {
	for(var i = 0; i < filteredFiles.length; i++) {
 		 console.log(filteredFiles[i]);
	}
}

printFiles(logFiles);


