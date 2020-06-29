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
})



module.exports = router;