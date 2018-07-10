//创建数据库连接四步曲

//1、需要mongoose插件对数据库进行操作
let mongoose = require('mongoose');
//2、与mongodb数据库创建通信
mongoose.connect('mongodb://127.0.0.1/todo');

//创建数据库实体对象
let db = mongoose.connection;
db.on('error',(err)=>{
    console.log('连接数据库失败')
})

db.once('open',()=>{
    console.log('数据库连接成功')
})

