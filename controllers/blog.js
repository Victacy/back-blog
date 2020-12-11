const postRouter=require('express').Router();
const { response } = require('express');
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
    const {author,title,content,date} =request.body;
    

    if(author && title && content){
        const blogCount=await post.countDocuments();
       

        const newPost=new post({
            // id:blogCount+1,
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
    postRouter.get('/:author',async(req,res) =>{
        const auth=request.params.author
        post.find({author:author})
        .then((res) =>{
            res.status(200).send(res)
            next()
        })
    })



    // route to get a post based on a parameter
    postRouter.get('/',(req,res,next) =>{

    })

    // route to update a post(content &number of votes)
    postRouter.put('/:id',(req,res,next) =>{

    })

    // route to delete a post
    postRouter.delete('/:id',(req,res,next) =>{
        deleteId=req.params.id
        post.findOneAndDelete({id:deleteId})
        .then((res) =>{
            res.status(200)
            next()
        }).catch((err) =>
        console.log(err))
    })

    postRouter.patch('/:id',(req,res,next) =>{

    })


module.exports=postRouter;