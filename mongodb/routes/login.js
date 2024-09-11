const express = require('express')
const route = express.Router()
const db = require ("../models/db")
// const ObjectId = db.ObjectId
const bcrypt = require('bcrypt')

route.post('/login', async(req, res) => {
    try{
        const {username, password} = req.body;
        let database = await db.getDataBase(); 
        
        const collection = database.collection('users')
        const user = await collection.findOne({username : username})
        
        if(!user){
            return res.status(400).send("User not found")
        }

        // let user = await cursor.toArray()
        var validPassword = await bcrypt.compare(password, user.password)

        if(!validPassword){
            return res.status(400).send("Password is incorrect")
        }

        const data = {name: username}
        const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN, { expiresIn: '1h' })

        res.json({'accessToken' : accessToken})
    }
    catch(error){
        console.log(error);
    }
})



// const verifyToken = (req, res, next) => {
//     // const authHeader = req.headers['authorization'];
//     // const token = authHeader && authHeader.split(' ')[1];

//     const token = req.body.token;

//     if(!token){
//         return res.status(401);
//     }
    
//     jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
//         if(err){
//             return res.status(401)
//         }

//         req.user = user
//         next()
//     })
// }

module.exports = route