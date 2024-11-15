// Random setup
let wicked = [
    "barrelRoll",
    "fadeIn",
    "floater",
    "heartbeat",
    "pulse",
    "rollerLeft",
    "rollerRight",
    "rotateIn",
    "rotateInLeft",
    "rotateInRight",
    "rotation",
    "shake",
    "sideToSide",
    "slideDown",
    "slideLeft",
    "slideRight",
    "slideUp",
    "spinner",
    "wiggle",
    "zoomer",
    "zoomerOut"
];
let wickedSelect = Math.floor(Math.random() * wicked.length);

// buttons
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btnRand = document.getElementById("btnRand");

// Fields
let field1 = document.getElementById("field1");
let field2 = document.getElementById("field2");
let field3 = document.getElementById("field3");
let field4 = document.getElementById("field4");
let field5 = document.getElementById("field5");
let field6 = document.getElementById("field6");
let field7 = document.getElementById("field7");
let field8 = document.getElementById("field8");
let field9 = document.getElementById("field9");
let field10 = document.getElementById("field10");


// On Clicks
btn1.addEventListener("click", function(event){
    field1.className = "fadeIn";
});

btn2.addEventListener("click", function(event){
    field2.className = "heartbeat";
});

btn3.addEventListener("click", function(event){
    field3.className = "barrelRoll";
});

btn4.addEventListener("click", function(event){
    field4.className = "floater";
});

btn5.addEventListener("click", function(event){
    field5.className = "rollerLeft";
});

btn6.addEventListener("click", function(event){
    field6.className = "rollerRight";
});

btn7.addEventListener("click", function(event){
    field7.className = "zoomer";
});

btn8.addEventListener("click", function(event){
    field8.className = "spinner";
});

btn9.addEventListener("click", function(event){
    field9.className = "slideUp";
});

btnRand.addEventListener("click", function(event){
    field10.className = wicked[wickedSelect];
});