"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},QF={get:function(e,t,o){var n="";for(var r in t)n+=r+"="+encodeURIComponent(t[r])+"&";n=n.slice(0,-1);var s=null;if(window.XMLHttpRequest)s=new XMLHttpRequest;else{if(!window.ActiveXObject)throw new Error("请升级您的浏览器");s=new ActiveXObject("Microsoft.XMLHttp")}s.onreadystatechange=function(){if(4===s.readyState&&200===s.status){var e=JSON.parse(s.responseText);o(e)}},s.open("get",e+"?"+n,!0),s.send()},post:function(e,t,o){var n="";for(var r in t)n+=r+"="+encodeURIComponent(t[r]+"&");n=n.slice(0,-1);var s=null;if(window.XMLHttpRequest)s=new XMLHttpRequest;else{if(!window.ActiveXObject)throw new Error("请升级你的浏览器");s=new ActiveXObject("Microsoft.XMLHttp")}s.onreadystatechange=function(){if(4===s.readyState&&200===s.status){var e=JSON.parse(s.responseText);o(e)}},s.open("post",e,!0),s.setRequestHeader("content-type","application/x-www-from-urlencoded"),s.send(n)},pGet:function(s,c){return new Promise(function(t,e){var o="";for(var n in c)o+=n+"="+encodeURIComponent(c[n])+"&";o=o.slice(0,-1);var r=null;if(window.XMLHttpRequest)r=new XMLHttpRequest;else{if(!window.ActiveXObject)throw new Error("请你升级你的浏览器");r=new ActiveXObject("Microsoft.XMLHttp")}r.onreadystatechange=function(){if(4===r.readyState&&200===r.status){console.log(r.responseText),console.log(_typeof(r.responseText));var e=JSON.parse(r.responseText);t(e)}},r.open("get",s+"?"+o,!0),r.send()})},pPsot:function(s,c){return new Promise(function(t,e){var o="";for(var n in c)o+=n+"="+encodeURIComponent(c[n])+"&";o=o.slice(0,-1);var r=null;if(window.XMLHttpRequest)r=new XMLHttpRequest;else{if(!window.ActiveXObject)throw new Error("请升级您的浏览器");r=new ActiveXObject("Microsoft.XMLHttp")}r.onreadystatechange=function(){if(4===r.readyState&&200===r.status){var e=JSON.parse(r.responseText);t(e)}},r.open("post",s,!0),r.setRequestHeader("content-type","application/x-www-form-urlencoded"),r.send(o)})},jsonp:function(e,t,o){var n="";for(var r in t)n+=r+"="+encodeURIComponent(t[r])+"&";n=n.slice(0,-1),window[t.jsonpcallback]=o;var s=document.createElement("script");s.src=e+"?"+n,console.log(s),document.body.appendChild(s),s.onload=function(){delete window[t.jsonpcallback],document.body.removeChild(s)}}};