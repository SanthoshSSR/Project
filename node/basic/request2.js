const http = require ("http")
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
                <form method = 'post' action = "/type">
                    <input type = "text" name = "user" value = ""/>
                    <button> Submit </button>
                </form>
                </body>
            </html>
        `)
        return res.end()
    }
    else if (url == "/type") {
        res.setHeader('Content-type', 'text/html')
        res.write(`
            <html>
                <head>
                    <title>New type</title>
                </head>
                <body>
                    <h1>Find the type of the world</h1>
                </body>
            </html>
        `)
        return res.end()
    }
    else {
        res.setHeader('Content-type', 'text/plain')
        res.write("Page not found")
        return res.end()
    }
})
server.listen(5000)