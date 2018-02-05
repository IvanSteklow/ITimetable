function checkTime(beg, end) {
    var s = 60,
        d = ':',
        b = beg.split(d),
        b = b[0] * s * s + b[1] * s + +b[2],
        e = end.split(d),
        e = e[0] * s * s + e[1] * s + +e[2],
        t = new Date,
        t = t.getHours() * s * s + t.getMinutes() * s + t.getSeconds();
    return (t >= b && t <= e);
}
var nowTime;
var time = "00:00:00";
var hou = "";
var min = "";
var sec = "";
var weekD;
nowTime = new Date();
if (nowTime.getHours() < 10) {
    hou = "0" + nowTime.getHours();
} else {
    hou = nowTime.getHours();
}
if (nowTime.getMinutes() < 10) {
    min = "0" + nowTime.getMinutes();
} else {
    min = nowTime.getMinutes();
}
if (nowTime.getSeconds() < 10) {
    sec = "0" + nowTime.getSeconds();
} else {
    sec = nowTime.getSeconds();
}
time = hou + ":" + min + ":" + sec;
$("h3#nt").html(time);
setInterval(function () {
    nowTime = new Date();
    if (nowTime.getHours() < 10) {
        hou = "0" + nowTime.getHours();
    } else {
        hou = nowTime.getHours();
    }
    if (nowTime.getMinutes() < 10) {
        min = "0" + nowTime.getMinutes();
    } else {
        min = nowTime.getMinutes();
    }
    if (nowTime.getSeconds() < 10) {
        sec = "0" + nowTime.getSeconds();
    } else {
        sec = nowTime.getSeconds();
    }
    weekD = nowTime.getDay();
    time = hou + ":" + min + ":" + sec;
    $("h3#nt").html(time);
}, 500);
var uroks = [
    ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    ["English", "Алгебра", "Физика", "География", "ПО ВЫБОРУ", "ПО ВЫБОРУ", "Геометрия", "Технология", "-"],
    ["Информатика", "English", "Физ-ра", "Русский язык", "Геометрия", "Татар теле", "ПО ВЫБОРУ", "ПО ВЫБОРУ", "-"],
    ["Физика", "История", "Литература", "Химия", "Алгебра", "Алгебра", "Русский язык", "ОБЖ", "-"],
    ["Геометрия", "Русский язык", "Литература", "Татар теле", "English", "English", "Физ-ра", "Физ-ра", "-"],
    ["English", "Русский язык", "История", "Обществознание", "Химия", "Татар адабият", "Биология", "<b>Классный час</b>", "-"],
    ["Алгебра", "Биология", "Физ-ра", "Физ-ра", "ИЗО", "География", "-", "-", "-"]
];
setInterval(function () {
    var curUrok = 0;
    if (checkTime("00:00:00", "08:40:00")) {
        curUrok = 1;
    } else if (checkTime("08:40:00", "09:30:00")) {
        curUrok = 2;
    } else if (checkTime("09:30:00", "10:20:00")) {
        curUrok = 3;
    } else if (checkTime("10:20:00", "11:30:00")) {
        curUrok = 4;
    } else if (checkTime("11:30:00", "12:20:00")) {
        curUrok = 5;
    } else if (checkTime("12:20:00", "13:10:00")) {
        curUrok = 6;
    } else if (checkTime("13:10:00", "15:20:00")) {
        curUrok = 7;
    } else if (checkTime("15:20:00", "16:10:00")) {
        curUrok = 8;
    } else {
        curUrok = 9;
    }
    if (weekD == 6) {
        if (checkTime("00:00:00", "08:35:00")) {
            $curUrok = 1;
        } else if (checkTime("08:35:00", "09:15:00")) {
            curUrok = 2;
        } else if (checkTime("09:15:00", "09:55:00")) {
            curUrok = 3;
        } else if (checkTime("09:55:00", "10:55:00")) {
            curUrok = 4;
        } else if (checkTime("10:55:00", "11:35:00")) {
            curUrok = 5;
        } else if (checkTime("11:35:00", "12:15:00")) {
            curUrok = 6;
        } else if (checkTime("12:15:00", "13:50:00")) {
            curUrok = 7;
        } else if (checkTime("13:55:00", "14:30:00")) {
            curUrok = 8;
        } else {
            curUrok = 9;
        }
    }
    $("span#urok1").html(uroks[weekD][(curUrok - 1)]);
    if (curUrok != 9) {
        $("span#urok2").html(uroks[weekD][curUrok]);
    } else {
        $("span#urok2").html("-");
    }
}, 500);