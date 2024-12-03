const express = require('express');
const router = express.Router();

const Comments = require('../models/Comments');

function insertCommentData(){
    Comments.insertMany([
        {
            post_title: "Blog title 2",
            comment: "This is comment 1",
        },
        {
            post_title: "Blog title 3",
            comment: "This is comment 2"
        },
        {
            post_title: "Blog title 3",
            comment: "This is comment 3"
        },
        {
            post_title: "Blog title 5",
            comment: "This is comment 4"
        },
        {
            post_title: "Blog title 6",
            comment: "This is comment 5"
        },
        {
            post_title: "Blog title 6",
            comment: "This is comment 6"
        },
     ])
}

// insertCommentData();

//=========================================================

// Post a new comment
router.post('/newcomment', async (req, res) => {
    try {
        const { post_title, comment } = req.body;
        const currentDate = new Date();

        const newComment = new Comments({ 
        post_title, 
        comment,
        submittedAt: currentDate });

           await newComment.save();

        res.status(201).json({ message: 'Comment created successfully', comment: newComment });
    } catch (error) {
        console.error('Error creating new comment:', error);
    }

});


//Get all comments 
//eg: http://localhost:5000/comments/allcomments

router.get('/allcomments', async (req, res) => {
       
    try { 
     const allComments = await Comments.find();
     res.status(200).json(allComments)
    } catch (error) {
     res.status(500).json({ error: error.message });
    }
   
   });

  // Get comments with id
// http://localhost:5000/comments/comment/:id
// eg: http://localhost:5000/comments/comment/674f7e17b657807e606180bf

router.get('/comment/:id', async (req, res) => {
    const commentId = req.params.id;; 
    try {
        const comment = await Comments.findById(commentId);

        if (!comment) {
            return res.status(404).json({ error: 'Comment not found' });
        }
        res.status(200).json(comment);
    } catch (error) {
        console.error('Error getting comment:', error);
    }
});


//updating a comment based on id
//http://localhost:5000/comments/comment/:id/update
//eg: http://localhost:5000/comments/comment/674e674c1e0b621beff2fc76/update


router.put('/comment/:id/update', async (req, res) => {
    
    const commentId = req.params.id;
    const { post_title, comment } = req.body;
    try {
        
        const updatedComment = await Comments.findByIdAndUpdate(
            commentId,
            {
                $set: { post_title,
                     comment, 
                     submittedAt: new Date()  } 
            },
            { new: true, runValidators: true } 
        );

        if (!updatedComment) {
            return res.status(404).json({ error: 'Comment not found' });
        }
         res.status(200).json({ message: 'Comment updated', comment: updatedComment });
        } catch (error) {
            console.error('Error getting comment:', error);
}

});

// deleting a comment based on id
//http://localhost:5000/comments/comment/:id/delete
//eg: http://localhost:5000/comments/comment/674f7d58eac71fafab166405/delete
router.delete('/comment/:id/delete', async (req, res) => {
    const commentId = req.params.id;
    try {
        const deleteComment = await Comments.findByIdAndDelete(commentId);

        if (!deleteComment) {
            return res.status(404).json({ error: 'Comment not found' });
        }

         res.status(200).json({ message: 'Comment deleted', comment: deleteComment });
        } catch (error) {
            console.error('Error getting comment:', error);
    }
});

module.exports = router;