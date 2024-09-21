                                        /* modules  */

                                            // os

const os = require("os")

//userinfo
const info = os.userInfo();
console.log(info);

//system uptime
console.log(`system uptime is ${os.uptime()}`);


const currOS = {
    name:os.type(),
    release:os.release(),
    version:os.version(),
    memory:os.totalmem(),
    hostName:os.hostname()
};
console.log(currOS);


                                            // path
const path = require('path');

console.log(path.sep);
console.log(path.join);

                                            // fs

const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync('./content/txtc','utf8');
const second = readFileSync('./content/txtcc','utf8');

writeFileSync('./content/res', `here's the first and second: ${first}, ${second}`, {flag: 'a'});


const {readFile, writeFile} = require('fs');
readFile('./content/txtc', 'utf8', (err,res)=>{
    if(err){
        console.log(err);
        return;        
    }
    const first = res;
    readFile('./content/txtcc', 'utf8', (err,res)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = res;
        writeFile('./content/rex', `here's the first and second: ${first}, ${second}`, (err,res)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(res);
        })
    })
})                                            


                                            // http

const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests for specific URLs
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Welcome to our homepage</h1>');
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>About page</h1>');
  } else {
    // Handle unknown or invalid URLs
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(`<h1>Page not found</h1>
             <a href='/'>back to homepage</a>`);
  }
});

server.listen(5000)
