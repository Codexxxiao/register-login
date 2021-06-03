// (async function () {
//     try {
//         // 1.判断数据库连接
//         await require('../db');

//         // 2.获取modelObj对象
//         let modelObj = require('../model');


//     } catch (error) {
//         console.log(error);
//     }
// })()

(async function () {
    try {
        // 1.等待数据库连接
        await require('../db');
        console.log('数据库连接成功~');

    } catch (error) {
        console.log(error);
    }
})();


// 2.获取modelObj对象
let modelObj = require('../model');


// module.exports = {
//     create: modelObj.create,
//     find: modelObj.findOne,
// }