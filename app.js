require('express-async-errors');
let express = require('express');
let todoRouter = require('./router/todo');
let service = require('./service/todo');
let config = require('./config');
let body = require('body-parser');
require('./db');
//注册日志打印中间件
let morgan = require('morgan');
let app = express();
app.use(morgan('combined'))
app.use(body.json());

app.use('/todo',todoRouter);

app.use((err,req,res,next)=>{
    res.send({

    })
})

app.listen(config.PORT);