# **Second Programming Summative
## *Traveling Blogs Web Application

### Overview
This web application allows users to look up others' travel blogs by searching address.
Users are allowed to register, login account to comment others' blogs and write done their owns.

## Start Up
### Prequisites and Installation
    Run 'npm install' under cmd for installing packages that you need.
    $ npm install
    $ npm start
### Run 'npm run dev' to start the programme.
    $ npm run dev
### And open a browser to get to http://127.0.0.1:3000/login.html

# eslint

在 cmd 当前根目录下运行 npm run pretest 执行eslint

# jtest

在cmd 当前根目录下 运行 npm run test 执行test代码

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
