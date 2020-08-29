let QF = {
    get: function (url, json, callback) {
        // 把json中的数据转换成key=value&key1=value1格式的querystring
        // 假设json的结构是 {a: 1, b: 2, c: 3} 那么我们要生成的就是a=1&b=2&c=3
        let queryString = "";
        for (var i in json) {
            queryString += i + "=" + encodeURIComponent(json[i]) + "&";
        }

        // 第一次循环结束 a=1&
        // 第二次循环结束 a=1&b=2&
        // 第三次循环结束 a=1&b=2&c=3& 为了去掉最后多出来的& 我们截取字符串
        queryString = queryString.slice(0, -1);

        // 四步写一遍
        let xhr = null;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHttp");
        } else {
            throw new Error("请升级您的浏览器");
        }

        // 绑定事件
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // 把接收到的数据转换为对象
                let obj = JSON.parse(xhr.responseText);
                callback(obj);
            }
        }

        // open
        xhr.open("get", url + "?" + queryString, true);
        // send
        xhr.send()
    },
    post: function(url, json, callback) {
        // 把json中的数据转化成key=value&key1=value1&key2=value2 格式的querystring
        // 假设json的结构是{a: 1, b: 2, c: 3} 那么我们要生成的就是a=1&b=2&c=3
        let queryString = "";
        for (var i in json) {
            queryString += i + "=" + encodeURIComponent(json[i] + "&");
        }
        // 第一次循环结束 a=1&
        // 第二次循环结束 a=1&b=2&
        // 第三次循环结束 a=1&b=2&c=3&

        queryString = queryString.slice(0 ,-1);

        // 四步写一遍
        let xhr = null;
        if(window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHttp");
        } else {
            throw new Error("请升级你的浏览器");
        }

        // 绑定事件
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // 把1接收到的数据转为对象
                let obj = JSON.parse(xhr.responseText);
                callback(obj);
            }
        }

        // open
        xhr.open("post", url, true);
        // 伪装成表单
        xhr.setRequestHeader("content-type", "application/x-www-from-urlencoded");
        // send
        xhr.send(queryString);
    },
    pGet: function(url, json) {
        return new Promise(function (resolve, reject) {
            let queryString = "";
            for(var i in json) {
                queryString += i + "=" + encodeURIComponent(json[i]) + "&";
            }
            queryString = queryString.slice(0, -1);
            let xhr = null;
            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                xhr = new ActiveXObject("Microsoft.XMLHttp");
            } else {
                throw new Error("请你升级你的浏览器");
            }
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log(xhr.responseText);
                    console.log(typeof xhr.responseText);
                    let obj = JSON.parse(xhr.responseText);
                    resolve(obj);
                }
            }
            xhr.open("get", url + "?" + queryString, true);
            xhr.send();
        })
    },

    pPsot: function(url, json) {
        return new Promise(function (resolve, reject) {
            let queryString = "";
            for (var i in json) {
                queryString += i + "=" + encodeURIComponent(json[i]) + "&";
            }

            queryString = queryString.slice(0, -1);

            // 四步写一遍
            let xhr = null;
            if(window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                xhr = new ActiveXObject("Microsoft.XMLHttp");
            } else {
                throw new Error("请升级您的浏览器");
            }

            // 绑定事件
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    // 把接收到的数据转化为对象
                    var obj = JSON.parse(xhr.responseText);
                    resolve(obj);
                }
            }

            xhr.open("post", url, true);
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhr.send(queryString);
        })
    },
    jsonp: function(url, data, callback) {
        let queryString = "";
        for(var i in data) {
            queryString += i + "=" + encodeURIComponent(data[i]) + "&";
        }
        queryString = queryString.slice(0, -1);
        window[data.jsonpcallback] = callback;
        // 生成sctipt标签
        let script = document.createElement("script");
        script.src = url + "?" + queryString;
        console.log(script);
        document.body.appendChild(script);


        script.onload = function() {
            delete window[data.jsonpcallback];
            document.body.removeChild(script);
        }
    }
}