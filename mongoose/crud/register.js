// 导入模型对象
let model = require('../model')
// 导入MD5
let md5 = require('md5');

// 封装注册函数
function createUser(username, password) {
    return model.create({
        username,
        password: md5(password)
    })
}

// 导出注册函数
module.exports = {
    createUser,
}