// 导入模型对象
let model = require('../model')

// 封装注册函数
function createUser(username, password) {
    return model.create({
        username,
        password
    })
}

// 导出注册函数
module.exports = {
    createUser,
}