// const express = require ("express")
// // const http = require ('http')
// const app = express ()
// app.use((req, res, next) => {
//     console.log("first");
//     // res.send('<h1>Express</h1>')
//     next()
// })
// app.use((req, res, next) => {
//     console.log("second");
//     res.send('<h1>Node</h1>')
//     next()
// })
// app.use((req, res, next) => {
//     console.log("third");
//     // res.send('<h1>Time</h1>')
//     next()
// })
// // const server = http.createServer(app)
// app.listen(3000)


const express = require ('express')
const app = express ()
const bodyParser = require ('body-parser')  //importing body-parser
const userRoutes = require ('./routes/user')
const adminRoutes = require ('./routes/admin')
// app.use(userRoutes)
// app.use(adminRoutes)
const path = require ('path')
app.use (bodyParser.urlencoded())
app.use (express.static(path.join(__dirname, "public")))
app.use ('/user', userRoutes)
app.use ('/admin', adminRoutes)
app.use ((req,res,next) => {
    // res.status (404).send ('<h1> 404 Page not found </h1>')
    res.status(404).sendFile (path.join(__dirname, 'views', 'error.html'))
})

app.listen(3000)