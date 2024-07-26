const http = require("http")
const server = http.createServer((req, res) => {
    let url = req.url
    // res.setHeader('Content-type', 'text/html')
    if (url == "/home") {
        res.setHeader('Content-type', 'text/html')
        res.write(`
            <html>
                <head>
                    <title>New world</title>
                </head>
                <body>
                <form method = 'post' action = "/message">
                    <input type = "text" name = "user" value = ""/>
                    <button> Submit </button>
                </form>
                </body>
            </html>
        `)
        return res.end()
    }
    else if (url == "/message" && req.method == 'POST') {
        // res.setHeader('Content-type', 'text/plain')
        // res.write("Welcome")
        res.setHeader('Location', '/home')
        res.statusCode = 302
        return res.end()
    }
    else {
        res.setHeader('Content-type', 'text/plain')
        res.write("Page not found")
        return res.end()
    }
})
server.listen(3000)