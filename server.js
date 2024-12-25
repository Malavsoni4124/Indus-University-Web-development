const { createSecretKey } = require("crypto")
var http = require(`http`)

http = http.createServer((req,res) => {
    res.end("<h1> Hello Node Server </h1>")
}).listen(4124)

console.log("The Server has started at http://127.0.0.1:4124")