const mongoose = require('mongoose')

let MONGODB_URI = 'mongodb+srv://shondriane:1234@travellog.u9ielyw.mongodb.net/?retryWrites=true&w=majority'

mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db