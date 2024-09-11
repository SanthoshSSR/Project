const express = require('express')
// const userRoutesscript = require('./routes/script')
const userRoutesbcrypt = require('./routes/encription')
const userRoutes = require('./routes/user')
const bodyParser = require('body-parser')
// require('./jobs/schedule')
const app = express()
require('dotenv').config()

app.use(bodyParser.urlencoded())
app.use(express.json())
app.use('/user', userRoutes)
// app.use('/script', userRoutesscript)
app.use('/encription', userRoutesbcrypt)


app.listen(3000)