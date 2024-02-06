// var http = require('http')
// var fs = require('fs');
// const localhost = '127.0.0.1';
// const { listen } = require('express/lib/application');
// const res = require('express/lib/response');
// const home = fs.readFileSync('./home.html')
// const about = fs.readFileSync('./about.html')
// const contact = fs.readFileSync('./contactus.html')
// const team = fs.readFileSync('./team.html')
// const server = http.createServer((req,res)=>{
//   console.log(req.url);
//   res.statusCode = 200;
//   res.setHeader('Content-Type','text/html');
//   res.end(home)
// }).listen(8080)




const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});



