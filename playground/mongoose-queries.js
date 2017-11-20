const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');
const {User} = require('./../server/models/User');

// var id = '5a12cf9a0177213d9c89716011';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch(e => console.log(e));

var userId = '5a125c064e249e3580bef6d5';

User.findById(userId).then((user) => {
  if (!user) {
    return console.log(`User with id ${userId} not found`);
  }

  console.log(JSON.stringify(user, undefined, 2));
}).catch((err) => console.log(err));