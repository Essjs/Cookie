
/** …Ë÷√cookie */
function setCookie(name, value, days) {
    var exp = new Date();
    exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
};

/** ªÒ»°cookie */
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

/** …æ≥˝ cookie */
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cavl = getCookie(name);
    if (cavl != null) {
        document.cookie = name + "=" + cavl + ";expires=" + exp.toGMTString();
    };
};