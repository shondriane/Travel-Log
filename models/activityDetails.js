const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ActivityDetails = new Schema(
    {
        name: { type: String, required: true },
        activity:{type:String, required: true},
        destination: {type: Schema.Types.ObjectId, ref:'Destination'},
        image: { type: String, required: true },
        description: { type: String, required: true },
        todo: { type: Array, required: true },
       
    },
    { timestamps: true },
)

module.exports = mongoose.model('ActivityDetails', ActivityDetails)