const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const ArticleSchema = new Schema({
    cathegory: String,
    title: String,
    author: String,
    articleContent:String,
    video:String,
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model('articles', ArticleSchema);