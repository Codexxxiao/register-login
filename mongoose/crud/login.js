// 导入model模块
let model = require('../model');

// 导入md5模块
let md5 = require('md5');

function findUser(username, password) {
    return model.findOne({
        username,
        password: md5(password),
    })
}


module.exports = {
    findUser,
}