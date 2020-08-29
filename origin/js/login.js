;(function () {
    // 实现用户名验证功能
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let submitBtn = document.getElementById("login_btn");
    let mistk_user = document.getElementById("mistk_username");
    let mistk_pass = document.getElementById("mistk_password");

    // 定义两把锁 一把决定用户名是否验证通过 一般决定密码是否验证通过
    let user_lock = false;
    let pass_lock = false;

    username.onblur = function () {
        // 获取用户输入的文本
        let val = username.value;
        // 定义正则表达式
        let reg = /^[^\d]\w{6,10}$/;
        // 验证是否符合正则的规则
        if(!reg.test(val)) {
            mistk_user.innerText = "请输入符合规范的用户名";
            // document.write(mistk_user.innerText);
            mistk_user.style.display = "block";
            user_lock = false;
            return;
        }
        mistk_user.innerText = "";
        // document.write(mistk_user.innerText);
        mistk_user.style.display = "none";
        user_lock = true;

    }

    password.onblur = function () {
        let val = password.value;
        let reg = /^[^\d]\w{6,10}$/;
        if(!reg.test(val)) {
            console.log("++++++passss");
            mistk_pass.innerText = "请输入符合规范的用户名";
            // document.write(mistk_user.innerText);
            mistk_pass.style.display = "block";
            pass_lock = false;
            return;
        }
        mistk_pass.innerText = "";
        // document.write(mistk_user.innerText);
        mistk_pass.style.display = "none";
        pass_lock = true;
    }

    submitBtn.onclick = function() {
        // 验证两把锁
        if(!(user_lock && pass_lock)) {
            return;
        }

        // 发送请求 
        QF.pPsot("../php/login.php", {username: username.value, password: password.value})
        .then((data) => {
            if (!data.error) {
                // 先获取URL的hash部分
                let targetURL = location.hash.slice(1) || "./index.html";
                console.log(targetURL);
                // 提示用户
                // alert(data.msg);
                // 登录成功后转到首页
                location.href = targetURL;
            } else {
                throw new Error(data.msg);
            }
        })
        .catch(function(data) {
            console.log(data);
        });
    }





})();