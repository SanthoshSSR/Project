const express = require('express')
const route = express.Router()
const db = require ("../models/db")
const bcrypt = require('bcrypt')
const jwt = require ('jsonwebtoken')

route.post('/register', async(req, res) => {
    const {username, password} = req.body
    let database = await db.getDatabase()
    const collection = database.collection('users')
    await bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash (password, salt, (err, hashedPassword) => {
            const password = hashedPassword
            // console.log(password);
            let data = {username: username, password: password}
            // console.log(data);
            collection.insertOne(data).then(() => res.json({data: "user added"}))
            .catch (err => res.status(400).json({'Error': err}))
        })
    })
})

route.post('/login', async(req, res) => {
    try{
        const {username, password} = req.body;
        let database = await db.getDatabase(); 
        const collection = database.collection('users')
        const user = await collection.findOne({username : username})        
        
        if(!user){
            return res.status(400).send({"message" : "User not found"})
        }

        var validPassword = await bcrypt.compare(password, user.password)

        if(!validPassword){
            return res.status(400).send({'message' : "Password is incorrect"})
        }

        const data = {name: username}
        const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN, { expiresIn: '1h' })
        // console.log(accessToken);
        

        res.json({'accessToken' : accessToken})
    }
    catch(error){
        console.log(error);
    }
})

const verifyToken = (req, res, next) => {
    // const authHeader = req.headers['authorization'];
    // const token = authHeader && authHeader.split(' ')[1];

    const token = req.body.token;
    // console.log(token);
    

    if(!token){
        return res.status(401);
    }
    // user = jwt.verify(token, process.env.ACCESS_TOKEN)
    // console.log(user);
    

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
        if(err){
            return res.status(401)
        }
        
        req.user = user
        // console.log(req.user);
        next()
    })
}

route.post('/add_products', verifyToken, (req, res) => {
    console.log(req.user, "req")
    console.log(req.body, "req")
    return res.json({})
})


module.exports = route