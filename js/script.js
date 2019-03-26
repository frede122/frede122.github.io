window.onscroll = function() {myFunction()};


var navbar = document.getElementById("stickymenu");
var sticky = stickymenu.offsetTop;
var area = document.getElementById("area-3");
var about = document.getElementById("aboutme");

function myFunction() {
  if (window.pageYOffset >= sticky) {
      stickymenu.classList.add("yes-sticky");
      stickymenu.classList.remove("no-sticky");
      stickymenu.classList.add("bg-dark");
     
      
  } else {
    stickymenu.classList.add("no-sticky");
    stickymenu.classList.remove("yes-sticky");
    stickymenu.classList.remove("bg-dark");

  }
    if(window.pageYOffset >= area.offsetTop - 400){
        about.classList.remove("opacityObj");
        descr.classList.remove("opacityObj");
        about.classList.add("bounceInRight");
        descr.classList.add("bounceInUp");
        
    }
    if(window.pageYOffset <= area.offsetTop - 600){
        about.classList.remove("bounceInRight");
        descr.classList.remove("bounceInUp");
        about.classList.add("opacityObj");
        descr.classList.add("opacityObj");
    }
}


