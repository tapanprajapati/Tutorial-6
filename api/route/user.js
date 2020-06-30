const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const User = require('../model/user');

router.get('/get_users',(req,res)=>{
    User.find()
    .exec()
    .then(data=>{
        console.log(data);
        res.status(200).json(data);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.get('/get_users/:username',(req,res)=>{
    User.findOne({username:req.params.username})
    .exec()
    .then(data=>{
        console.log(data);
        res.status(200).json(data);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.post('/add_user', (req, res)=>{
    const user = new User({
        _id: new mongoose.Types.ObjectId(), 
        username: req.body.username,
        email: req.body.email 
    });

    user.save().then(result=>{
        console.log(result);
        res.status(201).json({
            message:"User data added to database"
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(400).json({
            message:err.message
        });
    });
    
});


module.exports = router;