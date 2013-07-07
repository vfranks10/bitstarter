#!/usr/bin/env node
/*
Automatically grade files for the presence of specified HTML tags/attributes. Uses comander.js and cheerio. Teaches command line application development and basic DOM parsing.

References:
  + cheerio
    - https://github.com/MatthewMueller/cheerio
    - http://encosia.com/cheerio-faster-windows-friendly-alternativ-jsdom/
    - http://maxogden.com/scraping-with-node.html

  + commander.js
    - http://en.wikipedia.org/wiki/JSON
    - https://developer.mozilla.org/en-US/docs/JSON
    - https://developer.mozilla.org/en-us/docs/JSON#JON_in_Firefox_2
*/

var fs = require('fs');
var program = require('commander');
var cheerio = require('cheerio');
var HTMLFILE_DEFAULT = "index.html";
var CHECKSFILE_DEFAULT = "checks.json";

var assertFileExists = function(infile){
  var instr = infile.toString();
  if(!fs.existsSync(instr)){
    console.log("%s does note exist. Exiting.", instr);
    process.exit(1); // http:nodejs.org/api/process.html#process_process_exit_code
  }
  return instr;
};

var cheeriohtmlFile = function(htmlfile){
  return cheerio.load(fs.readFileSync(htmlFile));
};

var loadChecks = function(checksfile){
  return JSON.parse(fs.readFileSync(checksfile));
};   

var checkHtmlFile = function(htmlfile, checksfile){
  $ = cheerioHtmlFile(htmlfile);
  var checks = loadChecks(checksfile).sort();
  var out = {};
  for(var ii in checks){
    var present = $(checks[ii]).length>0;
    out[checks[ii]] = present;
  }  
  return out;
};

var clone = function(fn){
  // Workaround for commander.js issue.
  // http://stackoverflow.com/a/6772648
  return fn.bind({});
};

if(require.main == module){
  program
    .option('-c, --checks <check_file>', 'Path to checks.json', CHECKSFILE_DEFAULT)
    .option('-f, --file <html_file>', 'Path to index.html', clone(assertFileExists), HTMLFILE_DEFAULT)
    .parse(process.argv);
  var checkJson = checkHtmlFile(program,file,program.checks);
  var outJson = JSON.stringify(checkJson, null, 4);
  console.log(outJson); 
} 
else{
  exports.checkHtmlFile = checkHtmlFile;  
}
