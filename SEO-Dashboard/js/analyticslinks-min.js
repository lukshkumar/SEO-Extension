function dateFormat(t) {
    var n = new Date(t),
        r = n.getDate(),
        a = n.getMonth() + 1,
        s = n.getFullYear();
    return a = a < 10 ? "0" + a : a, r = r < 10 ? "0" + r : r, s + "" + a + r
}

function stringUntilLastSlash(t) {
    var n = t.lastIndexOf("/");
    return t.substring(0, n)
}

function stringFromLastSlash(t) {
    var n = t.lastIndexOf("/") + 1;
    return t.substring(n)
}

function clearURL(t) {
    var n = stringUntilLastSlash(t);
    return "%" === stringFromLastSlash(n).substring(0, 1) ? stringUntilLastSlash(n) : n
}
var now = (new Date).getTime(),
    d1 = 864e5,
    d7 = 7 * d1,
    d90 = 90 * d1,
    d180 = 2 * d90,
    y1 = 365 * d1;