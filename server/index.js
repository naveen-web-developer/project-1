//importing required packages
require('dotenv').config()
const express= require('express');

//express initialisation
const app = express();

//port configuration
const port =process.env.PORT||8080;

//server starting port
app.listen(port,()=>{
 console.log(`server started at port:${port}`);
}) 