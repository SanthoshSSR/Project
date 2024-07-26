const express = require ("express")
const route = express.Router()
route.get ('/', (req, res) => {
    res.send('<h1>Admin</h1>')
    console.log("Admin");
})

module.exports = route