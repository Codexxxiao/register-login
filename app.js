(async function () {

    try {
        // 导入express模块
        let express = require('express');
        // 导入ejs模块
        let ejs = require('ejs');
        // 导入register模块 用createUser解析变量
        let {
            createUser
        } = require('./mongoose/crud/register');
        // 导入login模块，用findUser解析变量
        let {
            findUser,
            findUserName
        } = require('./mongoose/crud/login');

        // 导入数据库连接模块
        let db = require('./mongoose/db');
        // 等待数据库连接
        await db;

        // 2.创建应用对象
        let app = express();

        // 3.定义中间件
        // 3.1 静态资源中间件
        app.use(express.static('./public'));
        // 3.2 post请求body实体中间件
        app.use(express.urlencoded({
            extended: true
        }));

        // 定义模板引擎
        app.set('view engine', 'ejs');

        // 定义模板的路径
        app.set('views', './module');

        // 4.还不知道需要定义什么路由
        // 4.1定义注册post路由　
        app.post('/register', async (request, response) => {
            // 解析username,password两个变量
            let {
                username,
                password
            } = request.body;

            // 判断账号是否存在
            let user = await findUserName(username);
            if (user) {
                response.send('账号已经被注册')
            } else {
                // createUser返回一个promise对象
                await createUser(username, password);

                // 注册成功后重定向到登录界面
                response.redirect('http://127.0.0.1:5000/view/login.html')
                // response.render()
            }
        })
        // 4.2定义登录post路由
        app.post('/login', async (request, response) => {
            // 解构username,password两个变量
            let {
                username,
                password
            } = request.body;

            // 查询是否存在
            let user = await findUser(username, password);
            if (user) {
                // response.send('登录成功')
                response.render('home', user)
            } else {
                response.send('账号或密码错误')
            }
        })

        // 5.开启服务器
        app.listen(5000, err => {
            if (err) console.log(err);
            else console.log('服务器开启');
        })
    } catch (error) {
        console.log(error);
    }

})();