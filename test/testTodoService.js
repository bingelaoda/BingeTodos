require('../db');

let todoService = require('../service/todo');

async function testTodoServiceFind() {
    let todo = await todoService.findAll();
    console.log(todo);
}

                                          
async function testTodoServiceAdd(){
    let todoItem = {
        content:'我们要完成'

    }
    let todo = await todoService.add(todoItem);
    console.log(todo);
}

async function testTodoServiceUpdate() {
    
    let todoItem = {
        content: '今天要完成。。。。,已经完成',
        isDone: true

    }
    let todo = await todoService.update('5b449bcb5191810b3a993804',todoItem);
    console.log(todo);

}

async function testTodoServiceDelete(){
    let todo = await todoService.deleteTodo('5b449bcb5191810b3a993804');
    console.log(todo);
}
testTodoServiceAdd();