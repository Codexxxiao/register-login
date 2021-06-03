// 1.导入mongoose模块
let mongoose = require('mongoose');

// 2.创建模式对象，用来约束集合
let schemaObj = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

// 3.创建模型对象，也就是集合
let modelObj = mongoose.model('user', schemaObj);

// 4.返回这个模型对象
module.exports = modelObj;