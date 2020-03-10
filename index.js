const fs = require('fs');
const inlineCss = require('inline-css');
const origin = 'origin';
const out = 'out';
const originSrc = fs.readdirSync(origin).filter(file => /\.html/.test(file)).map(files => `${origin}/${files}`);
const outSrc = fs.readdirSync(out).filter(file => /\.html/.test(file)).map(files => `${out}/${files}`);
let html = "";

for (let index = 0; index < originSrc.length; index++) {
  // after read files
  readFiles().then(function(resolveData) {
    // writeFile
    inlineCss(resolveData, {url: ' '})
      .then(function(resolveData){
        fs.writeFile(outSrc[index], resolveData, (error, data) => {
          if(error) throw error;
          console.log("생성 완료");
      });
    });
  });

  function readFiles() {
    return new Promise(function (resolve, reject) {
      fs.readFile(originSrc[index], 'utf8', (error, data) => {
        if(error) throw error;
        console.log("읽기 완료");
        html = data;
        resolve(html);
      });
    });
  }  
}

