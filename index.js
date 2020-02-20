const express = require('express');
const fs = require('fs');
const http = require('http');
const app = express();
const inlineCss = require('inline-css');
var html = "";

fs.readFile('./origin/origin.html', 'utf8', (error, data) => {
  if(error) throw error;
  console.log("success");
  html = data;
});

// writeFile
setTimeout(function(){
  inlineCss(html, {url: ' '})
    .then(function(html){
    fs.writeFile('./out/out.html', html, (error, data) => {
      if(error) throw error;
      console.log("success");
    });
  });
}, 1000)