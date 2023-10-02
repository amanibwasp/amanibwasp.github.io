//console.log("Script loaded successfully");
//
//$(document).ready(function() {
//    $('.header__burger').click(function(event) {
//        $('.header__burger,.header__menu').toggleClass('active');
//        $('body').toggleClass('lock');
//    });
//});
//
//
//function autoSlide() {
//    var slides = document.getElementsByClassName("slides")[0].children;
//    var radios = document.getElementsByName("r");
//    var index = 0;
//    var interval = setInterval(function() {
//        radios[index].checked = true;
//        index++;
//        if (index >= radios.length) {
//            index = 0;
//        }
//    }, 5000); // интервал в миллисекундах
//}
//
//window.onload = function() {
//    autoSlide();
//}


let burger_button = document.querySelector(".hamburger-button").addEventListener("click", ()=>
{
    document.querySelector(".nav-menu-burger").classList.toggle("active")
    // document.querySelector("body").classList.toggle("fixed-position")
})

let arrow = document.querySelector(".arrow").addEventListener("click", ()=>
{
    document.querySelector(".arrow").classList.toggle("opened")
    document.querySelector(".smarthome-about-text").classList.toggle("opened")
})



