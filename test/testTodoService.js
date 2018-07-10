require('../db');

let todoService = require('../service/todo');

async function testTodoServiceFind() {
    let todo = await todoService.findAll();
    console.log(todo);
}

                                          
async function testTodoServiceAdd(){
    let todoItem = {
        content:'今天要完成。。。。'

    }
    let todo = await todoService.add(todoItem);
    console.log(todo);
}

testTodoServiceAdd();