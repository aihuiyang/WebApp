const nedb = require('nedb');
module.exports = {
  ArticleDB: new nedb({
    filename: './model/article.db',
    autoload: true,
  }),
  CommentsDB: new nedb({
    filename: './model/Comments.db',
    autoload: true,
  }),
  UserDB: new nedb({
    filename: './model/user.db',
    autoload: true,
  }),
  findOne(db, params) {
    return new Promise((re, ej) => {
      this[db].findOne(params).exec((err, ret) => {
        if (err) {
          ej(err);
        } else {
          re(ret);
        }
      });
    });
  },
  insert(db, params) {
    return new Promise((re, ej) => {
      this[db].insert(params, (err, ret) => {
        if (err) {
          ej(err);
        } else {
          re(ret);
        }
      });
    });
  },
};
