const express = require ("express")
const route = express.Router()
const path = require ('path')           //for importing path 
// route.get ('/', (req, res) => {
//     res.send('<h1>First page</h1>')
// })
// route.get ('/message', (req, res) => {
//     res.send ('<h1>Second page</h1>')
// })


route.get ('/add', (req, res, next) => {
    // res.send (`<html>
    //             <head>
    //                 <title>New world</title>
    //             </head>
    //             <body>
    //             <form method = 'post' action = "/user/message">
    //                 <input type = "text" name = "user" value = ""/>
    //                 <button> Submit </button>
    //             </form>
    //             </body>
    //         </html>`)


    // console.log(__dirname);
    res.sendFile (path.join(__dirname, '..', 'views', 'app.html'))
})

route.post('/message', (req, res, next) => {
    console.log(req.body)
    res.send('<h1> Added successfully </h1>')
})

module.exports = route