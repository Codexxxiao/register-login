// 1.导入mongoose模块
let mongoose = require('mongoose');

// 2.连接数据库，并放回这个Promise实例化对象
module.exports = mongoose.connect('mongodb://127.0.0.1:27017/web0323re', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});