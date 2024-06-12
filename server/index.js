const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8000;
// cross origin resource sharing-> FE port x BE port
const cors = require('cors')


// Middleware for parsing JSON bodies
app.use(express.json());
app.use(cors())

//Database connection
const dbConnect = require("./src/db/connection");

dbConnect();

const userRoute=require("./src/routes/user")

app.use(userRoute)



app.get("/", (req, res) => {
  res.send("Hello World!");
});



// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: err.message });
});

app.listen(port, () => {
  console.log(`hello Example app listening on port ${port}`);
});
