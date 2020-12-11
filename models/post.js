const mongoose=require('mongoose');


const postSchema= new mongoose.Schema({
    // id:{
    //     type:Number,
    //     required:true
    // },
    
    author:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    upvotes:{
        type:Number
    },
    downvotes:{
        type:Number
    }
})


module.exports=mongoose.model("post",postSchema)