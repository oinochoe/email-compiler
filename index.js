const fs = require('fs');
const inlineCss = require('inline-css');
let html = "";

function readFiles() {
  return new Promise(function (resolve, reject) {
    fs.readFile('./origin/origin.html', 'utf8', (error, data) => {
      if(error) throw error;
      console.log("success");
      html = data;
      resolve(html);
    });
  });
}

// after read files
readFiles().then(function(resolveData) {
  // writeFile
  inlineCss(resolveData, {url: ' '})
    .then(function(resolveData){
      fs.writeFile('./out/out.html', resolveData, (error, data) => {
        if(error) throw error;
        console.log("success");
    });
  });
});