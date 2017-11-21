const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');
const {User} = require('./../server/models/User');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id: '5a138c177d4fb445f090513d'}).then((result) => {});

Todo.findByIdAndRemove('5a138c177d4fb445f090513d').then((result) => {
  console.log(result);
});