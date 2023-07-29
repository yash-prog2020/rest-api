const express=require('express');

const port=5005;

const app=express();

const router=require('./routes/devs');

const mongoose=require('mongoose');

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/restapiDB', {useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
    console.log('mongoDB in connected with your app');
}).catch((err)=>{
    console.log(err);
});


app.use('/register', router);


app.listen(port, (err)=>{
    if(err){
        console.log(`Error found in connecting the port : ${err}`);
    }
    console.log(`Server is running on the port : ${port}`);
});