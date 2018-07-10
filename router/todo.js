let router = require('express').Router();

let todoService = require('../service/todo');

//查询数据
router.get('/list',async (req,res)=>{
    let list = await todoService.findAll();
    res.send({
        code:0,
        data:list
    })
})

//添加数据
router.post('/add',async (req,res)=>{
    let todo = await todoService.add(req.body);
    res.send({
        code:0,
        data:todo
    })
})

//更新数据
router.put('/update/:id',async (req,res)=>{
    await todoService.update(req.params.id,req.body);
    res.send({
        code:0,
        data:'更新成功'
    })
})

//删除数据
router.delete('/delete/:id',async (req,res)=>{
    let list = await todoService.deleteTodo(req.params.id);
    res.send({
        code:0,
        data:"删除成功"
    })
})

router.post('/ddd',(req,res)=>{
    console.log(req.body);
    res.send('ddd');
})

module.exports = router;
