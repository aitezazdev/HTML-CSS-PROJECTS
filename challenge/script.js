let box_one = document.querySelector("#box1");
let box_two = document.querySelector("#box2");
let box_three = document.querySelector("#box3");
let box_four = document.querySelector("#box4");
let box_five = document.querySelector("#box5");
let box_six = document.querySelector("#box6");

box_one.addEventListener("click", function(){
    box_one.style.zIndex = 1;
    box_two.style.zIndex = 0;
});

box_two.addEventListener("click", function(){
    box_two.style.zIndex = 1;
    box_one.style.zIndex = 0;
});

box_three.addEventListener("click", function(){
    box_three.style.zIndex = 1;
    box_four.style.zIndex = 0;
});

box_four.addEventListener("click", function(){
    box_four.style.zIndex = 1;
    box_three.style.zIndex = 0;
});

box_five.addEventListener("click", function(){
    box_five.style.zIndex = 1;
    box_six.style.zIndex = 0;
});

box_six.addEventListener("click", function(){
    box_six.style.zIndex = 1;
    box_five.style.zIndex = 0;
});
