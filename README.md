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
* Click the register and login button on the top left to create your personal account.

* Click the red button  to add address, title, images and content. 

* To comment under others' blogs, click the same botton at the buttom after enterying the blog you wanna comment on, ( this bit is a bit doddgy) press the bottom button to add comments instead of clicking the white blank coming after "Comments".
* There are two buttons on top left which can be pressed to switch between home page and info page (information about the blog you are interested in.

______
## Testing
### eslint
Under cmd current directory, run code below to run estlint:
    $ npm run pretest 
    
### jtest
Under cmd current directory, run code below for testing:
    $ npm run test
______
## API Usage

### `/article/info/:title *GET*
Searches through the addresses of all the given events

### `/api/login/` *POST*

#### Request *JSON*
* `userName` **string** user name
* `password` **string** user password

#### Response *JSON*
* `status` **number** the status code of the response.
* `data` **object** of **objects**.
	* `id` **number** unique page identifier used by wikipedia.
	* `userName` **string** title of the recipe.

### `/user/create/` *POST*

#### Request *JSON*
* `userName` **string**  user name
* `password` **string**  user password

#### Response *JSON*
* `status` **number** the status code of the response.
* `data` **object** of **objects**.
	* `id` **number** unique page identifier used by wikipedia.
	* `userName` **string** title of the recipe.


### `/article/add` *POST*

#### Request *JSON*
* `userId` **number** user id
* `userName` **string** user name
* `text` **string**  user input text
* `image` **string** user upload image
* `address` **string**  user address

#### Response *JSON*
* `status` **number** the status code of the response.

### `/article/list` *GET*

#### Request *JSON*
* `address` **string**  user search address

#### Response *JSON*
* `status` **number** the status code of the response.
* `data` **array** of **objects**.
    * `userName` **string**
    * `text` **string**
    * `image` **string**
    * `address` **string**

### `/article/info` *GET*

#### Request *JSON*
* `id` **number**  artice id

#### Response *JSON*
* `status` **number** the status code of the response.
* `data` **object** of **objects**.
    * `userName` **string**
    * `text` **string**
    * `image` **string**
    * `address` **string**

### `/commit/add` *POST*

#### Request *JSON*
* `text` **string**  
* `articleId` **number**  
* `userId` **number**  
* `userName` **string**  

#### Response *JSON*
* `status` **number** the status code of the response.


### `/commit/list` *GET*

#### Request *JSON*
* `articleId` **string**  article id

#### Response *JSON*
* `status` **number** the status code of the response.
* `data` **array** of **objects**.
    * `text` **string**  
    * `articleId` **number**  
    * `userId` **number**  
    * `userName` **string**  
___
### License
```
MIT License
Copyright (c) 2019 ██ █
ss
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
