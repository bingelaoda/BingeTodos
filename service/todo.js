let TODO = require('../model/todo');

//查找所有记录
async  function findAll() {
   let todos =  await TODO.find();

   return todos;

}
//新增一条记录
async  function add(todoItem) {
    //在新增内容之前，需要进行判断，内容是否已经存在,所以调用方法

    await isExist({content:todoItem.content})

    console.log('he')

    let todos =  await TODO.create(todoItem);

    return todos;

}


async function isExist(temp){
    let one = await TODO.findOne(temp);
    if (one){
        throw Error(`内容:${temp.content} 已经存在`);

    }else {
        return one;
    }
}
//更新数据库，传入对应的id以及要更新的内容
async  function update(id,update){
    let todo = await TODO.update({_id:id},update);
    return todo;
}

//删除某一条数据
async function deleteTodo(id){
    let todo = await TODO.deleteOne({_id:id});
    return todo;
}


module.exports = {
    findAll,
    add,
    update,
    deleteTodo
}