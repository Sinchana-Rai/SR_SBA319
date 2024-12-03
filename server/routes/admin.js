const express = require('express');
const router = express.Router();

const User = require('../models/User');


function insertUserData(){
    User.insertMany([
        {
            username: "User1",
            password: "User123"
        },
        {
            username: "User2",
            password: "User234"
        },
        {
            username: "User3",
            password: "User345"
        },
        {
            username: "User4",
            password: "User456"
        },
        {
            username: "User5",
            password: "User567"
        },
        {
            username: "User6",
            password: "User678"
        },
     ])
}

// insertUserData();

//=========================================================

//Post new user data

router.post('/newuser', async (req, res) => {
    try {
        const { username, password } = req.body;

        const newUser = new User({ username, password });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error('Error creating new user:', error);
        res.status(500).json({ message: 'Internal server error', error });
    }

});


//Get all users 
//eg: http://localhost:5000/users/allusers
router.get('/allusers', async (req, res) => {
       
    try { 
     const Users = await User.find();
     res.status(200).json(Users)
    } catch (error) {
     res.status(500).json({ error: e.message });
    }
   
   });





module.exports = router;