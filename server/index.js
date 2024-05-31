
const express = require('express')
const app = express()
require('dotenv').config()
const port=process.env.PORT


//Database connection
const dbConnect = require('./src/db/connection')
dbConnect()


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/users/:id', (req, res) => {
  
   // query 

//   const userSearch= userList.filter((user)=>{
//     if(user.name.charAt(0)==(req.query.startwith)){
//      return user
//     }
// })

// params
   const particularUser= userList.find((user)=>{
    if(user.id==(req.params.id)){
      return user
    }
   })
   res.send(particularUser) 
})

app.listen(port, () => {
  console.log(`hello Example app listening on port ${port}`)
})