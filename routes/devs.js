const router=require('express').Router();
const mongoose=require('mongoose');
const Developers=require('../models/devloperSchema');

router.post('/create', async(req, res)=>{

    try{
        const entry = await(Developers.create(req.body));
        res.status(201).json({message : "Success"});
    }
    catch(err){
        res.status(401).json({message : "Error"});
    }

});


 
module.exports=router;