const db = require('./db')
const activityDetails = require('./models/activityDetails')
const ActivityDetail= require ('./models/activityDetails')
const Destination = require('./models/destination')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main =async()=>{
await activityDetails.delete
}

main()