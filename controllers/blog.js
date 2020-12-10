const postRouter=require('express').Router();
const mongoose=require('mongoose');
const post=require('../models/post');


//route for all posts
postRouter.get('/',(request,response,next) => {
    post.find({}).then(res=> {
        response.status(200).send(res)
        next();
    })
})


// route for creating a new post
postRouter.post('/',async(request,response,next) =>{
    const {author,title,content} =request.body;
    const blogCount=await post.countDocuments();

    if(author && title && content){
       

        const newPost=new post({
            author:author,
            title:title,
            content:content,
            date:Date(),
            upvotes:0,
            downvotes:0
        })

        newPost.save()
        .then(res =>{
            response.status(201).send(newPost);
        })
        .catch(err =>{
            console.log(err)
            response.status(501).send({
                message:"An error occured"
            })
        })
    }
    
    else {
        response.status(400).send({
            message:"Check your request body"
        })
    }
});


// route to get all posts by a specific author
// postRouter.get('/author/:author',async(req,res) =>{
//     res.send(res.params)
// })

module.exports=postRouter;