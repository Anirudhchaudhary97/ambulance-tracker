const mongoose = require('mongoose');

const dbConnect= async ()=>{

  try {
    const connection= await mongoose.connect("mongodb://localhost:27017/medulance")
    if(connection){
      console.log("connected to database")
    } 
  } catch (error) {
    console.log(error)
  }
 
}

module.exports= dbConnect;

