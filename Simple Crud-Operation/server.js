require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

const app = express();

//connect DB 
mongoose.set('strictQuery',true);
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true})
const db = mongoose.connection
db.on('error',(error)=>{
    console.error(error);
    
})
db.once('open',()=>{
    console.log('Connected to Database...');
    
})

//middleware
    //json middleware
app.use(express.json());

const subscriberRouter = require('./routes/subscribers.js')
app.use('/subscribers',subscriberRouter)

//app initialised
app.listen(3000,()=>{
    console.log('Server listening...');
})