//1.导入express模块
let express = require('express');

// 2.导入自定义数据库crud模块
let crud = require('./mongoose/crud');

// 2.创建应用对象
let app = express();

// 3.定义中间件
// 3.1 静态资源中间件
app.use(express.static('./public'));
// 3.2 post请求body实体中间件
app.use(express.urlencoded({
    extended: true
}));

// 4.还不知道需要定义什么路由
// 4.1定义注册post路由
app.post('/register', (request, response) => {
    crud.find({
        name: request.body.username
    }, (err, data) => {
        if (data) {
            response.send('用户已存在');
        } else {
            crud.create(request.body);
            response.send('注册成功')
        }
    })
})

// 5.开启服务器
app.listen(5000, err => {
    if (err) console.log(err);
    else console.log('服务器开启');
})