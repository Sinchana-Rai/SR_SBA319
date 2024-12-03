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

router.post('/newcomment', async (req, res) => {
  

});




module.exports = router;