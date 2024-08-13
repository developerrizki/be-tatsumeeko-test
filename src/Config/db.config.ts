//importing modules
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

// const username = process.env.MONGODB_USERNAME
// const password = process.env.MONGODB_PASSWORD
const dbName = 'rizki-be'

const connectionString = `mongodb://localhost:27017/${dbName}`

const options = {
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
};

export const db = mongoose.connect(connectionString, options)
    .then(res => {
        if(res){
            console.log(`Database connection succeffully to ${dbName}`)
        }
    }).catch(err => {
        console.log(err)
    })