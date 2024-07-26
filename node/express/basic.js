const express = require ("express")
const app = express()
app.use ('/', (req, res, next) => {
    res.send ('<h1>first</h1>')
})
app.use ('/second', (req, res, next) => {
    res.send ('<h2>second</h2>')
})
app.use ('/third', (req, res, next) => {
    res.send ('<h3>third</h3>')
})
app.listen(3000)