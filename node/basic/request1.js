const http = require ("http")
const server = http.createServer((req, res) => {
    // console.log(req);
    console.log(req.url);
    console.log(req.method);
    res.setHeader('Content-type', 'text/html')
    res.write("<html>")
    res.write("<head><title>Hello world</title></head>")
    res.write("<body><h1>Hello..karka</h1></body>")
    res.end()
})
server.listen(3000)