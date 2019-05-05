
/** 设置cookie
* name  (String) key
* vlaue (String) 值
* days  (Number) 保留时长
*/
function setCookie(name, value, days) {
    var exp = new Date();
    exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
};

/** 获取cookie
* name (String) cookie的key值
*/
function getCookie(name) {
    var cookie = document.cookie.replace(/[ ]/g, ""),
        arr = cookie.split(';');
    for (let i = 0; i < arr.length; i++) {
        var cookie_arr = arr[i].split('=');
        if (name == cookie_arr[0]) {
            return cookie_arr[1];
        };
    };
};

/** 删除cookie
* name (String) cookie的key值
*/
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cavl = getCookie(name);
    if (cavl != null) {
        document.cookie = name + "=" + cavl + ";expires=" + exp.toGMTString();
    };
};
