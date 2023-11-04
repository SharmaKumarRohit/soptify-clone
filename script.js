// <---------------------------- language menu ---------------------------->
var clo = document.querySelector("#close");
var langu = document.querySelector("#lang");
clo.addEventListener('click', function() {
    langu.style.display = "none";
})

// <----------------------------------- ask questions ------------------------->
var ask = document.querySelector(".ask__questions");
var text = document.querySelector(".clickEvent");
var arrow = document.querySelector(".down__arrow");
var flag = 0;

ask.addEventListener('click', function() {
    if(flag == 0) {
        text.style.display = "block";
        arrow.style.transform = "rotate(-180deg)";
        flag = 1;
    }
    else {
        text.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
        flag = 0;
    }
})

var ask1 = document.querySelector(".oneq");
var text1 = document.querySelector(".onec");
var arrow1 = document.querySelector(".onei");
var flag1 = 0;

ask1.addEventListener('click', function() {
    if(flag1 == 0) {
        text1.style.display = "block";
        arrow1.style.transform = "rotate(-180deg)";
        flag1 = 1;
    }
    else {
        text1.style.display = "none";
        arrow1.style.transform = "rotate(0deg)";
        flag1 = 0;
    }
})

var ask2 = document.querySelector(".twoq");
var text2 = document.querySelector(".twoc");
var arrow2 = document.querySelector(".twoi");
var flag2 = 0;

ask2.addEventListener('click', function() {
    if(flag2 == 0) {
        text2.style.display = "block";
        arrow2.style.transform = "rotate(-180deg)";
        flag2 = 1;
    }
    else {
        text2.style.display = "none";
        arrow2.style.transform = "rotate(0deg)";
        flag2 = 0;
    }
})

var ask3 = document.querySelector(".threeq");
var text3 = document.querySelector(".threec");
var arrow3 = document.querySelector(".threei");
var flag3 = 0;

ask3.addEventListener('click', function() {
    if(flag3 == 0) {
        text3.style.display = "block";
        arrow3.style.transform = "rotate(-180deg)";
        flag3 = 1;
    }
    else {
        text3.style.display = "none";
        arrow3.style.transform = "rotate(0deg)";
        flag3 = 0;
    }
})

// <---------------------------------- Policy section -------------------------------->
var lan = document.querySelector("#none");
var can = document.querySelector(".policy__container");
lan.addEventListener('click', function() {
    can.style.display = "none";
})