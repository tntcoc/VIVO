// setTimeout(() => {
(function () {
    // 用户名输入
    var username = document.getElementById("arrow");
    // 密码输入
    let password = document.getElementById("password_inset");
    console.log(username.value);
    console.log(password.value);
    // 用户名密码错误提示
    let mistk_user = document.getElementById("hint_user");
    let mistk_pass = document.getElementById("hint_pass");
    console.log(mistk_user);
    console.log(mistk_pass);


    // 选择框勾选
    let checkbtn = document.getElementById("checkbox");
    console.log("勾选");
    console.log(checkbtn.checked);
    // console.log(checkbtn.);

    // 注册按钮
    let sunbimt_btn = document.getElementById("os_pc_btn");
    console.log(sunbimt_btn);

    // 先设定三把锁，一把决定用户名是否通过验证，一把决定密码是否通过验证
    let user_lock = false;
    let pass_lock = false;
    let check_lock = false;

    // 输入框失去焦点的时候 发送请求 
    // console.log("___________________");
    username.onblur = function () {
        // 获取用户输入的脚本
        let val = username.value;
        console.log(val);
        // 定义正则表达式
        let reg = /^[^\d]\w{6,10}$/;
        // 验证是否符合正则的规则
        if (!reg.test(val)) {
            // console.log("++++++++++++++");
            mistk_user.innerText = "请输入符合规范的用户名";
            // document.write(mistk_user.innerText);
            mistk_user.style.display = "block";
            user_lock = false;
            return;
        }

        mistk_user.innerText = "";
        // document.write(mistk_user.innerText);
        mistk_user.style.display = "none";


        // 发送请求验证用户名是否存在
        // console.log("_________________");
        QF.pGet("../php/checkusername.php", {
                username: val
            })
            .then(function (data) {
                // console.log("!!!!!!!!!!!!!!!!!!!");
                // console.log(data);
                // console.log(data.msg);
                if (!data.error) {
                    mistk_user.innerText = data.msg;
                    mistk_user.style.display = "block";

                    user_lock = true;
                } else {
                    mistk_user.innerText = data.msg;
                    mistk_user.style.display = "block";
                    // if(data.msg === "")
                    throw new Error(data.msg);
                    
                }
            })
            .catch(function (err) {
                console.log(err);
                // console.log("~~~~~~~~~~~~");
                user_lock = false;
            });

    }

    console.log("________!!!++++++");
    password.onblur = function () {
        let vel = password.value;
        console.log(vel,"+++++++++=");
        var reg = /^[^\d]\w{6,10}$/;
        if (!reg.test(vel)) {
            mistk_pass.innerText = "请输入符合规范的密码";
            // document.write(mistk_user.innerText);
            mistk_pass.style.display = "block";
            pass_lock = false;
            return;
        }
        mistk_pass.innerText = "";
        mistk_pass.style.display = "none";
        pass_lock = true;
    }

    // 勾选框默认勾选
    // 待完善
    checkbox.onblur = function() { 
        if(checkbox.checked == true) {
            check_lock = true;
        }
    }
    
    sunbimt_btn.onclick = function() {
        // 通过判定 两把锁的状态决定是否发送请求
        if(!(user_lock && pass_lock && check_lock)) {
            return;
        }
        // 发送Ajax请求
        console.log("++++++++++++++++++++Ajax");
        QF.pPsot("../php/regist.php", {
            username: username.value,
            password: password.value
            
        })
        .then(function (data) {
            if (!data.error) {
                alert(data.msg);
                // 成功之后 我们要跳转到登录页面
                location.href = "./login.html";
            } else {
                throw new Error(data.msg);
            }
        })
        .catch(function (e) {
            alert("注册失败");
        })
    }

})();

// }, 3000);