<?php

    // 获取前端提交的数据
    $username = $_GET["username"];
    $password = $_GET["password"];


    // 连接数据库
    mysql_connect("localhost", "root", "root");

    // 选择数据库
    mysql_select_db("gz2004");

    // 定义查询语句
    $sql = "SELECT * FROM userinfo WHERE username = '$username' and password = '$password'";


    // 执行语句
    $result = mysql_query($sql);


    // 获取条数
    $count = mysql_num_rows($result);


    // 判定
    if ($count == 1) {
        // 说明用户名和密码都对
        $arr = array("error" => 0, "msg" => "登录成功");
        // 设置cookie
        setcookie("islogin", "1", time() + 10 * 1000, "/");
        setcookie("username", "1", time() + 10 * 1000, "/");
        setcookie("username", "1", time() + 10 * 1000, "/");

    } else {
        // 说明用户名或密码不正确
        $arr = array("error" => 1, "msg" => "用户名或密码错误");
    }

    echo json_encode($arr);




?>