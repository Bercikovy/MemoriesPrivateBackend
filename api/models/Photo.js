const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const PhotoSchema = new Schema({
    type: String,
    link: String,
    title: String,
    place:String,
    like:Number,
    share:Number,
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model('photos', PhotoSchema);