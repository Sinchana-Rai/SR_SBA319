const express = require('express');
const router = express.Router();

const Post = require('../models/Post');

//routes
// router.get('', (req, res) => {
//     res.send("Welcome to the API.");
//   });

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

  


  module.exports = router;