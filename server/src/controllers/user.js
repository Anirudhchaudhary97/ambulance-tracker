const User = require("../models/User");


// create user controller

const createUser= async (req,res,next)=>{
    
    const newUser= new User({
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email
    })
     try {
        const saveUser=await newUser.save()
        console.log("user saved")
        res.json(saveUser)
        
     } catch (error) {
        next(error) 
     }
  
     
} 

module.exports={
    createUser
}