const userRouter=require("express").Router()
const User = require("../models/user");
const bcrypt=require('bcrypt');


userRouter.get('/',(request,response,next)=>{

    User.find({}).then(result=>{
        response.status(200).send(result)
        next();
    })
})

userRouter.post('/signup',async(request,response) =>{
    const{firstName,lastName,email,password}=request.body;
    
    if(firstName && lastName && email && password){
        user.password=bcrypt.hashSync(user.password,10)

        const user=new User({
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password
        })
    }
    

    try{
        const newUser=await user.save()
        response.send({message:"User created successfully", newUser})
    }
        catch(err){
        console.log(err)
        response.status(500).send({error:"Internal Server Error"})

    }
    
})


userRouter.post('/login',async(request,response) =>{
    try{
        const user=await user.findOne({email:request.body.email});
        console.log(user);
        if(user){
            const right= await bcrypt.compareSync(request.body.password,user.password)

            if (right){
                response.send({message:"Successful"})
            }
        }else{
            response.send("Incorrect email or passwoord")
        }
     
    }
        catch(err){
        console.log(err)
        response.status(501).send({error:"Internal Server Error"})

    }
    
})



module.exports=userRouter;