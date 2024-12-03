const express = require('express');
const router = express.Router();

const Post = require('../models/Post');

 //Inserting initial data to Blog DB
 function insertPostData(){
    Post.insertMany([
        {
            title: "Building a Blog",
            body_data: "This is the body text1"
        },
        {
            title: "Blog title 2",
            body_data: "This is the body text2"
        },
        {
            title: "Blog title 3",
            body_data: "This is the body text3"
        },
        {
            title: "Blog title 4",
            body_data: "This is the body text4"
        },
        {
            title: "Blog title 5",
            body_data: "This is the body text5"
        },
        {
            title: "Blog title 6",
            body_data: "This is the body text6"
        },
        {
            title: "Blog title 7",
            body_data: "This is the body text7"
        },
        {
            title: "Blog title 8",
            body_data: "This is the body text8"
        },
        {
            title: "Blog title 9",
            body_data: "This is the body text9"
        },
        {
            title: "Blog title 10",
            body_data: "This is the body text10"
        },
    ])
}

// insertPostData();

//=============================================

  
//Post new blog data

router.post('/post', async (req, res) => {

    const title = req.body.title;
    const body_data = req.body.body_data;
  
    const currentDate = new Date();

    const newData = new Post({
        title: title,
        body_data: body_data,
        createdAt: currentDate,
        updatedAt: currentDate
    });

    Post.create(newData)
    .then(p => {
        p = newData;
        res.status(201).send(p)
    })
});


//Get all blog posts 
//eg: http://localhost:5000/posts/allposts
router.get('/allposts', async (req, res) => {
       
   try { 
    const Posts = await Post.find();
    res.status(200).json(Posts)
   } catch (error) {
    res.status(500).json({ error: error.message });
   }
  
  });


  // Get posts with id
// http://localhost:5000/posts/post/:id
// eg: http://localhost:5000/posts/post/674e3f79022de88c22be7fee

router.get('/post/:id', async (req, res) => {
    const { id: postId } = req.params; 
    try {
        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


//Update a post based on id
// http://localhost:5000/posts/post/:id/update
//http://localhost:5000/posts/post/674cbe166578d6257f403193/update

router.put('/post/:id/update', async (req, res) => {

    const { id: postId } = req.params;
    const { title, body_data } = req.body;

    try {
        const updatedPost = await Post.findByIdAndUpdate(
            postId,
            {
                $set: { title, body_data, updatedAt: new Date() } 
            },
            { new: true, runValidators: true } 
        );

        if (!updatedPost) {
            return res.status(404).json({ error: 'Post not found' });
        }
         res.status(200).json({ message: 'Post updated', post: updatedPost });
        } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// deleting a post based on id
//http://localhost:5000/posts/post/:id/delete
//eg: http://localhost:5000/posts/post/674e3f79022de88c22be7fee/delete
router.delete('/post/:id/delete', async (req, res) => {
    const { id: postId } = req.params;
    try {
        const deletePost = await Post.findByIdAndDelete(postId);

        if (!deletePost) {
            return res.status(404).json({ error: 'Post not found' });
        }

         res.status(200).json({ message: 'Post deleted', post: deletePost });
        } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

  module.exports = router;