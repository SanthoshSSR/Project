const express = require('express')
const route = express.Router()
const db = require ("../models/db")
// const ObjectId = db.ObjectId
const studentservice = require('../services/studentservice')


route.get('/list', async(req, res) => {
    try{
        let result = await studentservice.dataList()
        return res.status(200).json({data: result})
    }catch{
        return res.status(404).json({message: "Collection not found"})
    }
})

route.post('/add', async(req, res) => {
    try{
        let request = req.body
        studentservice.addList(request)
        return res.status(200).send({message: "Inserted successfully"})
    }catch{
        return res.status(404).send({message: "Collection not found"})
    }
})

route.post('/update', async(req, res) => {
    try{
        let request = req.body
        const update = await studentservice.updateList(request)
        console.log(update);
        return res.status(200).send({message: "Updated successfully"})
        }
        catch(err){
            return res.status(404).send({Error: err, message: "No records found"})
        }
})

module.exports = route


// route.get('/list', async(req, res) => {
//     let database = await db.getDatabase()
//     const collection = database.collection('students') // collection Name
//     const cursor = await collection.find({})
//     let studentsdata = await cursor.toArray()

//     return res.status(200).json({data: studentsdata})
// })

// route.post('/add', async(req, res) => {
//     let request = req.body
//     let database = await db.getDatabase()
//     const collection = database.collection('students')
//     let data = {name: request.name, age: request.age, place: request.place}
//     await collection.insertOne(data)
//     return res.status(200).send({message: "Inserted successfully"})
// })

// route.post('/add', async(req, res) => {
//         let request = req.body
//         let database = await db.getDatabase()
//         const collection = database.collection('students')
//         const userId = new ObjectId (request.user_id)
//         let cursor = await collection.find({_id: userId})
//         let users = await cursor.toArray()
//         if (users.length == 1){
//             // await collection.updateOne({_id: userId}, {$set: {age: request.age}})
//             // return res.status(200).send({message: "Updated successfully"})
//             await collection.deleteOne({_id: userId})
//             return res.status(200).send({message: "Deleted successfully"})
//         }
//         else{
//             return res.status(404).send({message: "No records found"})
//         }
// })