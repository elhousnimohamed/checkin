const mongoose=require('mongoose')

const chicken_collection = mongoose.Schema({
    name: {type: String, required: true},
    birthday: Date,
    weight: { type: Number,  required: true },
    living: Boolean,
    steps: { type: Number,  default: 0 },
    isRunning: { type: Boolean, default: false}
}) ;

module.exports=mongoose.model('chicken_collection',chicken_collection);

