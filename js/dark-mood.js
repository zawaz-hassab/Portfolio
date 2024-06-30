

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







// It's the dark mode


let icon = document.querySelector(".icon-light");
let logo = document.getElementById("h-dark");
let head = document.querySelector(".headwhite");
let iconDark = document.querySelector(".light-dark");
let landingDark = document.querySelector(".landing");
let aboutDark = document.querySelector(".about-dark")
let serviceDark = document.querySelector(".service");
let resumeDark = document.querySelector(".resume");
let resumeHead = document.querySelector(".sum");
let ced = document.querySelector(".ced");
let cex = document.querySelector(".cex");
let footerDark = document.querySelector(".footer");
let menuDark = document.getElementById("icon-dark");
let formBlack = document.querySelector(".form-black");
let darkimg = document.querySelector(".dark-img");


function lightMood() {
        iconDark.addEventListener('click', () => {
        icon.classList.toggle("black");
        iconDark.classList.toggle("head-light");
        head.classList.toggle("head-light");
        logo.classList.toggle("h-light");
        landingDark.classList.toggle("land-light");
        aboutDark.classList.toggle("about-light");
        serviceDark.classList.toggle("service-light");
        resumeDark.classList.toggle("resume-light");
        resumeHead.classList.toggle("resumhead");
        ced.classList.toggle("ced-change");
        cex.classList.toggle("cex-change");
        formBlack.classList.toggle("form-white");
        menuDark.classList.toggle("icon-white");
        footerDark.classList.toggle("footer-dark");
    })
}

lightMood();




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


