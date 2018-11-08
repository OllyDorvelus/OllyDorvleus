/**
* Created by 13477 on 11/5/2018.
*/
$(document).ready(function(){
    console.log("Hello World")


//$("subnav").hide(); // hide the fixed navbar initially

var topofDiv = $("nav").offset().top; //gets offset of header
var height = $("nav").outerHeight(); //gets height of header

$(window).scroll(function(){
    if($(window).scrollTop() > (topofDiv + height)){
     //  $("subnav").css("top","0")
       $("subnav").animate(({
           top: "0",
           opacity: 0.8
       }), 10)
    }
    else{
      // $("subnav").css("top", "4rem");
       $("subnav").animate(({
           top: "4rem",
           opacity: 1
       }), 10)
    }
});
})