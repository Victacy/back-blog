const mongoose=require('mongoose');


const postSchema= new mongoose.Schema({
    
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
        type:String
    },
    upvotes:{
        type:Number
    },
    downvotes:{
        type:Number
    }
})


module.exports=mongoose.model("post",postSchema)