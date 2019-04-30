const express = require('express');
const app = express();
const DB = require('./model/db.js');
const bodyParser = require('body-parser');
const multer = require('multer');
const session = require('express-session');
const crypto = require('crypto');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'temp/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage, limits: { fieldSize: '10mb' } });

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(express.static('public'));
app.use(express.static('temp'));
app.use(
  session({
    secret: 'key',
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000000,
    },
  })
);
function initHash(pwd, salt) {
  let hash = crypto.createHmac('sha512', salt);
  hash.update(pwd);
  return hash.digest('base64');
}

function isLogin(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.json({
      status: 401,
      message: 'Please login',
    });
  }
}
//
app.post('/login', async function (req, res) {
  const { userName, password } = req.body;
  const result = await DB.findOne('UserDB', { userName });

  if (!result) {
    res.json({
      status: 401,
      message: 'Username or password incorrect',
    });

    return;
  }
  const salt = result.salt;
  const hashPwd = initHash(password, salt);
  const existUser = await DB.findOne('UserDB', { userName, password: hashPwd });

  if (!existUser) {
    res.json({
      status: 401,
      message: 'Username or password incorrect',
    });
  }
  delete existUser.password;
  req.session.user = existUser;
  res.json({
    status: 0,
    data: existUser,
  });
});

app.post('/loginOut', async function (req, res) {
  req.session.user = null;
  res.json({
    status: 0,
  });
});

app.post('/user/create', async function (req, res) {
  const data = req.body;

  if (!data.userName) {
    let salt = crypto.randomBytes(16).toString('base64');

    req.body.password = initHash(req.body.password, salt);
    req.body.salt = salt;
    const data = await DB.insert('UserDB', req.body);

    res.json({
      status: 0,
      data,
    });

    return;
  }
  const exists = await DB.findOne('UserDB', { userName: data.userName });

  if (!exists) {
    let salt = crypto.randomBytes(16).toString('base64');

    req.body.password = initHash(req.body.password, salt);
    req.body.salt = salt;
    const data = await DB.insert('UserDB', req.body);

    res.json({
      status: 0,
      data,
    });

    return;
  }
  const json = {
    status: 417,
    message: 'The account already exists!',
  };

  res.json(json);
});

app.post('/article/add', isLogin, function (req, res) {
  req.body.userId = req.session.user._id;
  req.body.userName = req.session.user.userName
  DB.ArticleDB.insert(req.body, (err, ret) => {
    if (err) {
      res.status(500).end(err);
    } else {
      res.json(ret);
    }
  });
});

app.get('/article/list', function (req, res) {
  var title = req.query.title
  var query = {}
  if (title) {
    query.$or = [{
      address: new RegExp(title)
    }]
  }
  DB.ArticleDB.find(query)
    .exec((err, ret) => {
      res.json(ret);
    });
});
app.get('/article/info', async function (req, res) {
  var data = await DB.findOne('ArticleDB', { _id: req.query.id });
  res.json(data);
})
app.post('/article/delete', isLogin, function (req, res) {
  DB.ArticleDB.remove({ _id: req.body._id }, (err, ret) => {
    res.json(ret);
  });
});

app.post('/commit/add', isLogin, function (req, res) {
  req.body.userId = req.session.user._id;
  req.body.author = req.session.user.userName;
  var d = new Date()
  var getText = (i) => {
    return i > 9 ? i : `0${i}`
  }
  req.body.time = [d.getFullYear(), d.getMonth() + 1, d.getDate()].join('-') + " " + [getText(d.getHours()), getText(d.getMinutes())].join(":")
  DB.CommitDB.insert(req.body, (err, ret) => {
    if (err) {
      res.status(500).end(err);
    } else {
      res.json(ret);
    }
  });
});

app.post('/commit/list', isLogin, function (req, res) {
  DB.CommitDB.find({ a_id: req.body.a_id })
    .exec((err, ret) => {
      res.json(ret);
    });
});

app.post('/commit/delete', isLogin, function (req, res) {
  DB.CommitDB.remove({ _id: req.body._id }, (err, ret) => {
    res.json(ret);
  });
});
app.post('/file_upload', upload.single('file'), function (req, res) {
  const file = req.file;

  res.json({ url: file.filename });
});

const http = require('http');
const PORT = process.env.PORT || 3000;

http.createServer(app).listen(PORT, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('HTTP server on http://localhost:%s', PORT);
  }
});
