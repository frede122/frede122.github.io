window.onscroll = function() {scrollFunction()};


function stickyBar(){

    
}

function stickyArea(){
    var area = document.getElementById("question-section");
    var about = document.getElementById("aboutme");
    var imgAbout = document.getElementById("img-user");
    if(window.pageYOffset + (screen.height * 0.7 ) >= area.offsetTop){
        
        about.classList.remove("opacityObj");
        descr.classList.remove("opacityObj");
        about.classList.add("fadeInRight");
        descr.classList.add("fadeInUp");
        hist1.classList.add("fadeInLeftBig");
        hist2.classList.add("fadeInLeftBig");
        
    }
    else{
        about.classList.remove("fadeInRight");
        descr.classList.remove("fadeInUp");
        about.classList.add("opacityObj");
        descr.classList.add("opacityObj");
        hist1.classList.remove("fadeInLeftBig");
        hist2.classList.remove("fadeInLeftBig");
    }
}


function scrollFunction() {
    if (window.pageYOffset > stickymenu.offsetTop) {

      stickymenu.classList.add("yes-sticky","bg-dark-transp");
      stickymenu.classList.remove("no-sticky");
       
     
      
    } else {
        stickymenu.classList.add("no-sticky");
        stickymenu.classList.remove("yes-sticky");
        stickymenu.classList.remove( "bg-dark-transp");
    }
    stickyArea();
    
}




