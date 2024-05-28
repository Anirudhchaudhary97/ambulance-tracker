
const express = require('express')
const app = express()
const port = 4000

const userList=[
  
    {
      id:1,
      name:'anirudh',
      age:"24"
    },
     {
      id:2,
      name:'sanzay',
      age:"24"
    },
     {
      id:3,
      name:'suraj',
      age:"24"
    }
  
]


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