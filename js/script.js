window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    var areaQuestion = document.getElementById("question-section");
    var about = document.getElementById("aboutme");
    var information = document.getElementById("information");
    var informationLogo = document.getElementById("information-logo");
    var informationDescr = document.getElementById("information-descr");
    var glyphiconStats =  document.getElementById("glyphicon-stats");
    var glyphiconWrench =  document.getElementById("glyphicon-wrench");
    var glyphiconCloud =  document.getElementById("glyphicon-cloud");
    var glyphiconPencil =  document.getElementById("glyphicon-pencil");
    var glyphiconQrCode =  document.getElementById("glyphicon-qrcode");
    var glyphiconPhone =  document.getElementById("glyphicon-phone");


    // Menu Area 
    const altura = window.innerHeight;
    if (window.pageYOffset > stickymenu.offsetTop) {
      stickymenu.classList.add("yes-sticky","bg-dark-transp");
      stickymenu.classList.remove("no-sticky");

    } else {
        stickymenu.classList.add("no-sticky");
        stickymenu.classList.remove("yes-sticky");
        stickymenu.classList.remove( "bg-dark-transp");
    }

    // Icons Area
    if(window.pageYOffset > (glyphiconWrench.offsetTop - altura)) { glyphiconWrench.classList.add("fadeIn", "animated", "slow"); }
    if(window.pageYOffset > (glyphiconStats.offsetTop - altura)) { glyphiconStats.classList.add("fadeIn", "animated", "slow", "delay-05s"); }
    if(window.pageYOffset > (glyphiconCloud.offsetTop - altura)) { glyphiconCloud.classList.add("fadeIn", "animated", "slow", "delay-1s"); }
    if(window.pageYOffset > (glyphiconPencil.offsetTop - altura)) { glyphiconPencil.classList.add("fadeIn", "animated", "slow"); }
    if(window.pageYOffset > (glyphiconQrCode.offsetTop - altura)) { glyphiconQrCode.classList.add("fadeIn", "animated", "slow", "delay-05s"); }
    if(window.pageYOffset > (glyphiconPhone.offsetTop - altura)) { glyphiconPhone.classList.add("fadeIn", "animated", "slow", "delay-1s"); }
    

    // About Area
    if(window.pageYOffset  > areaQuestion.offsetTop){   
        about.classList.remove("opacityObj");
        descr.classList.remove("opacityObj");
        about.classList.add("fadeInRight");
        descr.classList.add("fadeInUp");
        hist1.classList.add("fadeInLeftBig");
        hist2.classList.add("fadeInLeftBig");
    }

    // Information 
    if(window.pageYOffset > (information.offsetTop - altura + 100 )){
        informationLogo.classList.add("fadeInRight");
        informationDescr.classList.add("fadeInLeft");
    }

}




