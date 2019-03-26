window.onscroll = function() {myFunction()};

var navbar = document.getElementById("stickymenu");
var sticky = stickymenu.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky+450) {
      stickymenu.classList.add("yes-sticky");
      stickymenu.classList.remove("no-sticky");
      stickymenu.classList.add("bg-dark");
     
      
  } else {
    stickymenu.classList.add("no-sticky");
    stickymenu.classList.remove("yes-sticky");
    stickymenu.classList.remove("bg-dark");

  }
}