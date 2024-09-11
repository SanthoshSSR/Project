const mongodb = require ('mongodb')
const mongoClient = mongodb.MongoClient
const ObjectId = mongodb.ObjectId

let database;
async function getDatabase(){
    const client = await mongoClient.connect("mongodb://127.0.0.1:27017")
    database = client.db('karka')
    if (!database){
        console.log('Database not connect');
    }
    return database
}

async function getCollection(collectionName){
    let database = await getDatabase()
    const collection = database.collection(collectionName)

    return collection
}
module.exports = {getDatabase, ObjectId, getCollection}