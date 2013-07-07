#!/usr/bin/env node
var fs = require('fs');
var outfile = "hw3.txt";
var out = "http://github.com/vfranks10/bitstarter, http://powerful-peak-8461.herokuapp.com/";
fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
