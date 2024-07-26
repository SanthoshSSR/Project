const http = require("http")
const fs = require("fs")
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
        const body = []
        req.on('data', (chunk) => {
            // console.log(chunk);
            body.push(chunk);
            // console.log(body);
        })
        req.on('end', () => {
            console.log('End event');
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')
            fs.writeFileSync ('hello.txt', message[1])
            console.log(parsedBody);
            console.log(message);
        })
        fs.writeFileSync('hello.txt', "Welcome")
        console.log('End of the body');
        return res.end()
    }
    else {
        res.setHeader('Content-type', 'text/plain')
        res.write("Page not found")
        return res.end()
    }
})
server.listen(3000)