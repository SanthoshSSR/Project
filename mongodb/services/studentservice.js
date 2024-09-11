const db = require ("../models/db")
// const express = require('express')
// const route = express.Router()
const ObjectId = db.ObjectId
const collectionName = "students"

let dataList = async() => {
    try{
        const collection = await db.getCollection(collectionName)
        const cursor = await collection.find({})
        const studentDetails = await cursor.toArray()
        return studentDetails
    }
    catch(err){
        return err
    }
}

const addList = async(request) => {
    try{
        const collection = await db.getCollection(collectionName)
        const data = {name: request.name, age: request.age, place: request.place}
        const add = await collection.insertOne(data)
        return add
    }
    catch(err) {
        return err
    }
}

const updateList = async(request) => {
    try{
        const userId = new ObjectId (request.user_id)
        const collection = await db.getCollection(collectionName)
        let cursor = await collection.find({_id: userId})
        let users = await cursor.toArray()
        if (users.length == 1){
            const update = await collection.updateOne({_id: userId}, {$set: {age: request.age}})
            return update
            // throw new Error('No user found with the given ID')
        }
    }
    catch(err){
        return ({Error: err.message})
    }
//         else{
//             return res.status(404).send({message: "No records found"})
//         }
}
//             await collection.deleteOne({_id: userId})
//             return res.status(200).send({message: "Deleted successfully"})

module.exports = {dataList, addList, updateList}