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
    }

});


//Get all users 
//eg: http://localhost:5000/users/allusers
router.get('/allusers', async (req, res) => {
       
    try { 
     const Users = await User.find();
     res.status(200).json(Users)
    } catch (error) {
     res.status(500).json({ error: error.message });
    }
   
   });

 // Get user with id
// http://localhost:5000/users/user/:id
// eg: http://localhost:5000/users/user/674e662f764259b09fbdb2be

router.get('/user/:id', async (req, res) => {
    try {
        const userId = req.params.id;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ user });
    } catch (error) {
        console.error('Error getting user:', error);
    }
  
});

//updating a user based on id
//http://localhost:5000/users/user/:id/update
//eg: http://localhost:5000/users/user/674e674c1e0b621beff2fc76/update


router.put('/user/:id/update', async (req, res) => {
    
    const userId = req.params.id;
    const { username, password } = req.body;
    try {
        
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            {
                $set: { username, password } 
            },
            { new: true, runValidators: true } 
        );

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
         res.status(200).json({ message: 'User updated', user: updatedUser });
        } catch (error) {
            console.error('Error getting user:', error);
}

});

//Deleting a user based on id
// http://localhost:5000/users/user/:id/delete
// eg: http://localhost:5000/users/user/674df915adedb2755cacee98/delete
router.delete('/user/:id/delete', async (req, res) => {
    const userId = req.params.id;
    try {
        const deleteUser = await User.findByIdAndDelete(userId);

        if (!deleteUser) {
            return res.status(404).json({ error: 'User not found' });
        }

         res.status(200).json({ message: 'User deleted', user: deleteUser });
        } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;