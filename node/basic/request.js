const http = require ("http")
const server = http.createServer((req, res) => {
    // console.log(req);
    console.log(req.url);
    console.log(req.method);
    res.setHeader('Content-type', 'text/plain')
    res.write("Karka")
    res.end()
})
server.listen(3000)