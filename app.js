(async function () {

    try {
        // 导入express模块
        let express = require('express');
        // 导入register模块 用createUser解析变量
        let {
            createUser
        } = require('./mongoose/crud/register');
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

        // 4.还不知道需要定义什么路由
        // 4.1定义注册post路由
        app.post('/register', async (request, response) => {
            // 解析username,password两个变量
            let {
                username,
                password
            } = request.body;
            // createUser返回一个promise对象
            await createUser(username, password);

            response.send('register-ok')
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