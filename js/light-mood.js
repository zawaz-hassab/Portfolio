

document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll('.animate-on-scroll');

    function checkViewport() {
    for (var i = 0; i < elements.length; i++) {
        var position = elements[i].getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
        if (position < windowHeight * 0.75) {
        elements[i].classList.add('active');
        }
    }
    }

    window.addEventListener('scroll', function() {
    checkViewport();
    });

    // Initial check when the page loads
    checkViewport();
});



document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll('.animate-move');

    function checkInView() {
        elements.forEach(function(element) {
            var bounding = element.getBoundingClientRect();
            if (
                bounding.top >= 0 &&
                bounding.left >= 0 &&
                bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
                bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            ) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    }

    function scrollAnimationLoop() {
        checkInView();
        requestAnimationFrame(scrollAnimationLoop);
    }

    scrollAnimationLoop();
});





// it's the light mood



let iconLight = document.querySelector(".icon-dark");
var headLight = document.querySelector(".head-light");
let bigiconDark = document.getElementById("black-dark")
let landingWhite = document.querySelector(".land-light");
let aboutWhite = document.querySelector(".about-light")
let serviceLight = document.querySelector(".service-light");
let resumeLight = document.querySelector(".resume-light");
let footerLight = document.querySelector(".footer-light");
let formWhite = document.querySelector(".form-white");
let menuWhite = document.getElementById("icon-white");
let headeFormwhite = document.getElementById("head-form");



bigiconDark.addEventListener("click", () => {
    headLight.classList.toggle("head-black");
    iconLight.classList.toggle("white");
    landingWhite.classList.toggle("land-dark");
    aboutWhite.classList.toggle("aboutchange");
    serviceLight.classList.toggle("service-dark");
    resumeLight.classList.toggle("resume-dark");
    formWhite.classList.toggle("form-change");
    menuWhite.classList.toggle("icon-change");
    headeFormwhite.classList.toggle("last");
    footerLight.classList.toggle("footdark")
})



// Loading

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
    });
});



// cursor 
const cursorIn = document.querySelector("[data-cursor-in]");
const cursorRadius = document.querySelector("[data-cursor-radius]");


window.addEventListener("mousemove" , function(e) {
    
    const posX = e.clientX;
    const posY = e.clientY;

    cursorIn.style.left = `${posX}px`;
    cursorIn.style.top = `${posY}px`;


    cursorRadius.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards"});

});


// up-down

const btn = document.getElementById("btn");

window.onscroll = function() {
    if (scrollY >= 1200) {
        btn.style.display= "flex";
    } else {
        btn.style.display= "none";
    }
};

btn.onmouseover = function() {
    btn.style.cursor="none";
};

btn.onclick = function() {
    scroll({
        top:0,
        behavior: "smooth"
    })
};