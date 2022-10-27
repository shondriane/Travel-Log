require ('dotenv').config()
const mongoose = require('mongoose')

// let MONGODB_URI = 'mongodb+srv://shondriane:1234@travellog.u9ielyw.mongodb.net/?retryWrites=true&w=majority'
let dbUrl = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb://127.0.0.1:27017/travellog'
mongoose
    .connect(dbUrl)
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection
mongoose.set('debug', true)

module.exports = db