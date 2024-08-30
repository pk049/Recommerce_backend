const User = require('../models/user'); 
const mongoose = require('mongoose');

exports.adduser = async (req, res) => {
    try {
        const { username, email,password } = req.body;
        const newUser = new User({ username,email, password }); 
        const result = await newUser.save(); 
        
        res.status(201).json({
            status: 'success',
            data: result
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};
