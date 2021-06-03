
function Check(ele, reg) {
    this.ele = ele;
    this.reg = reg;
    let _this = this;
    this.ele.oninput = function () {
        _this.inputCheck();
    }
}

Check.prototype.inputCheck = function () {
    let val = this.ele.value.trim();

    if (!val) return;

    if (this.reg.test(val)) {
        this.ele.nextElementSibling.textContent = '';
    } else {
        this.ele.nextElementSibling.textContent = '格式错误';
        this.ele.nextElementSibling.style.color = 'red';
    }
}

// 给用户名绑定表单验证事件
let oUser = document.querySelector('input[name=username]');
let userReg = /^web\w{5,9}$/;
new Check(oUser, userReg);

// 给密码绑定表单验证事件
let oPw = document.querySelector('input[name=password]');
//密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)：^[a-zA-Z]\w{5,17}$
let pwReg = /^[a-zA-Z]\w{5,17}$/;
new Check(oPw, pwReg)

// 判断确定密码
let oRpw = document.querySelector('input[name=repassword]');
oRpw.oninput = function () {
    if (this.value === oPw.value) {
        this.nextElementSibling.textContent = '';
    } else {
        this.nextElementSibling.textContent = '密码不一致';
        this.nextElementSibling.style.color = 'red';
    }
}