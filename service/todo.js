let TODO = require('../model/todo');


async  function findAll() {
   let todos =  await TODO.find();

   return todos;

}

async  function add(todoItem) {
    let todos =  await TODO.create(todoItem);

    return todos;

}


module.exports = {
    findAll,
    add
}