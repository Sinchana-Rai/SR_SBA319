## SBA 319: MongoDB Database Application

This Project contains three data collections : Post ,User and Comments

### CRUD Routes for *Post* collection

To insert few initial set of data to the post collection in **blog** database uncomment the insertPostData() function and start the application.

1. Add a post using POST 
   - /posts/post   
    eg:[ http://localhost:5000/posts/post ]

       Example json for adding a new post is:
    {
        "title": "Blog title 12",
        "body_data": "This is the body text12"
    }

2. Retrieve all posts using GET 
    - /posts/allposts

    eg: [ http://localhost:5000/posts/allposts ]

3. Retrieve a specific post with GET
    - /posts/post/:id  

    eg: [ http://localhost:5000/posts/post/674e3f79022de88c22be7fee ]

4. Update a post's details using PUT 
    - /posts/post/:id/update

    eg: [ http://localhost:5000/posts/post/674cbe166578d6257f403193/update ]

5. Delete a post using DELETE 
    - /posts/post/:id/delete

    eg: [ http://localhost:5000/posts/post/674e3f79022de88c22be7fee/delete ]


    

-----

### CRUD Routes for *User* collection

To insert few initial set of data to the user collection in **blog** database uncomment the insertUserData() function and start the application.

1. Add a new user using POST 
   - /users/newuser   
    eg: [ http://localhost:5000/users/newuser ]

       Example json for adding a new user is:
        {
        "username": "User7",
        "password": "User789"
        }

    - ( validation added while posting a new user:  

        On giving a number for the username field instead of a string a response message is displayed 
      {
    "username": 1111,
    "password": "user1111"
}
Gives the response : "message": "Username must be a string"
)


2. Retrieve all users using GET 
    - /users/allusers

    eg: [ http://localhost:5000/users/allusers ]

3. Retrieve a specific user with GET
    - /users/user/:id

    eg: [ http://localhost:5000/users/user/674e662f764259b09fbdb2be ]

4.  Update a user's details using PUT 
    - /users/user/:id/update

    eg: [ http://localhost:5000/users/user/674e674c1e0b621beff2fc76/update ]

5. Delete a user using DELETE 
    - /users/user/:id/delete

    eg: [http://localhost:5000/users/user/674df915adedb2755cacee98/delete ]




-----

### CRUD Routes for *Comments* collection

To insert few initial set of data to the Comments collection in **blog** database uncomment the insertCommentData() function and start the application.

1. Add a new comment using POST 
   - comments/newcomment  
    eg: [ http://localhost:5000/comments/newcomment ]

       Example json for adding a new comment is:
        {
            "post_title": "Blog title 2",
            "comment": "This is the comment for Blog2"
        }

2. Retrieve all comments using GET 
    - comments/allcomments

    eg: [ http://localhost:5000/comments/allcomments ]

3. Retrieve a specific comment with GET
    - /comments/comment/:id

    eg: [ http://localhost:5000/comments/comment/674f7e17b657807e606180bf ]

4.  Update a comment's details using PUT 
    - /comments/comment/:id/update

    eg: [ http://localhost:5000/comments/comment/674e674c1e0b621beff2fc76/update ]    

5. Delete a comment using DELETE 
    - /comments/comment/:id/delete

    eg: [http://localhost:5000/comments/comment/674f7d58eac71fafab166405/delete ]

---

References:
- [ https://www.mongodb.com/docs/mongodb-shell/crud/] 
- Youtube tutorials (Net Ninja)
