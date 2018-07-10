let express = require('express');
let todoRouter = require('./router/todo');
let service = require('./service/todo');
let body = require('body-parser');
require('./db');
let app = express();
app.use(body.json());

app.use('/todo',todoRouter);

app.listen(4000);