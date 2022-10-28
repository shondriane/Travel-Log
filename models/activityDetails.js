const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ActivityDetails = new Schema(
    {
        name: { type: String, required: true },
        date: { type: String,  required: true },
        activity:{type:String, required: true},
        destination: {type: Schema.Types.ObjectId, ref:'Destination'},
        image: { type: String, required: true },
        description: { type: String, required: false },
        todo: { type: Array, required: false },
       
       
    },
    { timestamps: true },
)

module.exports = mongoose.model('ActivityDetails', ActivityDetails)