

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