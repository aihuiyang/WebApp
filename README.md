# README

这是一个分享游记的应用，需要通过注册和登录，然后添加自己的游记文章，其他用户可以在这里评论，游记可以发布图片填写地址以便搜索
This is an application mainly for sharing travel experience, register to see others' strories, add your owns and comment underneath a story. And you can search by typing in different address.

# Getting Started

Prequisites and Installation
    Run 'npm install' under cmd for installing packages that you need.
    $ npm install
    $ npm start

    Run 'npm run dev' to start the programme.
    $ npm run dev

在浏览器中打开 http://127.0.0.1:3000/login.html


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
