const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
require('dotenv/config');
const app=express()
app.use(bodyParser.json());

//import routes
const chicken_routes=require('./routes/chicken')
app.use('/chicken',chicken_routes)
// Routes
app.get('/',(req,res)=> res.send("we are in home"))

mongoose.connect(process.env.DB_CONNETION, { 
    useUnifiedTopology: true,useNewUrlParser: true },()=>console.log('connected to db'))

//PORT
app.listen(process.env.PORT,()=>console.log(`runing on : http://localhot:3000`))
