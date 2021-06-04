// 声明构造函数，给实例化对象绑定表单校验事件
function Check(ele, reg) {
    this.ele = ele;
    this.reg = reg;
    let _this = this;
    this.ele.oninput = function () {
        clearContent();
        _this.inputCheck();
    }
}

// 每个实例化对象的表单校验功能
Check.prototype.inputCheck = function () {
    let val = this.ele.value.trim();

    if (!val) return;

    if (this.reg.test(val)) {
        this.ele.nextElementSibling.textContent = '';
        // 给元素添加一个自定义属性
        this.ele.nextElementSibling.dataset.check = 'true';
    } else {
        this.ele.nextElementSibling.textContent = '格式错误';
        this.ele.nextElementSibling.style.color = 'red';
        this.ele.nextElementSibling.dataset.check = 'false';
    }
}

// 提示框内容清除函数
function clearContent() {
    // 获取提交按钮后面的span标签
    let oSpan = document.querySelector('input[type=submit]+span');
    // console.log(oSpan);
    // 清除内容
    oSpan.textContent = '';

}

// 1.给用户名绑定表单验证事件
let oUser = document.querySelector('input[name=username]');
// 用户名以web开头，共8~12位
new Check(oUser, /^web\w{5,9}$/);

// 2.给密码绑定表单验证事件
let oPw = document.querySelector('input[name=password]');
//密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)：^[a-zA-Z]\w{5,17}$
new Check(oPw, /^[a-zA-Z]\w{5,17}$/)

// 4.给提交按钮绑定点击事件
let oSubmit = document.querySelector('input[type=submit]');
oSubmit.onclick = function (e) {

    // 获取所有文本框和密码框
    let oSpans = document.querySelectorAll('.check');

    // 获取返回值
    let isAllChecked = [...oSpans].every(function (item, index) {
        return item.dataset.check === 'true';
    })

    // 判断表单是否全符合格式
    if (!isAllChecked) {

        this.nextElementSibling.textContent = '账号或密码不规范'
        this.nextElementSibling.style.color = 'red';

        return e.preventDefault();
    }

}