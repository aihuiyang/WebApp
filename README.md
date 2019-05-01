# **Second Programming Summative
## *Traveling Blogs Web Application

______
### Overview
 This web application allows users to look up others' travel blogs by searching address.
Users are allowed to register, login account to comment under others' blogs, and also write done their own blogs.

The web application is hosted here: https://prog-sum.herokuapp.com/
(It was supposed to be a travel bolg place, but now it's turning into a meme collecting place. Anyway, browse around and have fun!:) )
______
### Start Up
#### Prequisites and Installation
    Run 'npm install' under cmd for installing packages that you need.
    $ npm install
    $ npm start
### Run 'npm run dev' to start the programme.
    $ npm run dev
### And open a browser to get to http://127.0.0.1:3000/login.html
______
### Index Page
It's a really simple, clear but full-functioned page:
* Click the register and login buttom on the top left to create your personal account.
* Click the red buttom  to add address, title, images and content. 
* 
______
## Testing
### eslint
Under cmd current directory, run code below to run estlint:
    $ npm run pretest 
    
### jtest
Under cmd current directory, run code below for testing:
    $ npm run test

#api

#/login post
{
    userName,
    password
}


#/user/create post
{
    userName,
    password
}

#/article/add post
{
    userId,
    userName,
    text,
    image,
    address
}
#/article/list get
{
    address
}

#/article/info get
{
    id
}

#/commit/add post
{
    text,
    articleId,
    userId,
    userName
}

#/commit/list get
{
    articleId
}
