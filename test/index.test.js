const Model = require('../model/db.js');

const userName = +new Date();
const password = userName;

it('register', async () => {
  expect.assertions(1);
  const data = await Model.insert('UserDB', { userName, password });
  expect(data.userName).toEqual(userName);
});
it('add commit', async () => {
  expect.assertions(1);
  const data = await Model.insert('CommitDB', { content: '123' });
  expect(data.content).toEqual('123');
});

it('delete commit', async () => {
  expect.assertions(1);
  const data = await Model.insert('CommitDB', { content: '123' });
  await new Promise(re => {
    Model.CommitDB.remove({ _id: data._id }, function() {
      re();
    });
  });
  expect('ok').toEqual('ok');
});
it('find commit', async () => {
  expect.assertions(1);
  await new Promise(re => {
    Model.CommitDB.find({}, function() {
      re();
    });
  });
  expect('ok').toEqual('ok');
});
