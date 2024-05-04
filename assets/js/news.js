document.body.style.overflowY = 'auto';

const backgroundImages = [
    'assets/svg/--bg--theme-dark1.svg',
    'assets/svg/--bg--theme-dark2.svg',
    'assets/svg/--bg--theme-dark3.svg',
    'assets/svg/--bg--theme-dark4.svg'
];

const randomIndex = Math.floor(Math.random() * backgroundImages.length);
document.body.style.backgroundImage = `url(${backgroundImages[randomIndex]})`;

function showLoadingOverlay() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "flex"; 
}


function hideLoadingOverlay() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none"; 
}

showLoadingOverlay();

setTimeout(function() {
    hideLoadingOverlay();
}, 90);

document.addEventListener("DOMContentLoaded", function() {
    const scrollUpButton = document.querySelector(".button-arrow-footer:first-of-type");
    const nav = document.querySelector(".nav-footer"); 
    const paragraphs = document.querySelectorAll(".footer p");
    const scrollDownButton = document.querySelector(".button-arrow-footer:last-of-type");
  
    function centerButtons() {
        const buttons = document.querySelectorAll(".button-arrow-footer");
        buttons.forEach(button => {
            button.style.textAlign = "center";
            button.style.margin = "0 auto";
        });
    }
  
    centerButtons();
  
    function checkWindowSize() {
        return window.innerWidth <= 1048;
    }
  
    if (checkWindowSize()) {
        scrollUpButton.style.display = "block";
        nav.style.display = "none";
        paragraphs.forEach(paragraph => {
            paragraph.style.display = "none";
        });
    }
  
    scrollUpButton.addEventListener("click", function() {
        this.style.display = "none";
        scrollDownButton.style.display = "block";
        nav.style.display = "block";
        paragraphs.forEach(paragraph => {
            paragraph.style.display = "block";
        });
        centerButtons();
    });
  
    scrollDownButton.addEventListener("click", function() {
        this.style.display = "none";
        nav.style.display = "none";
        paragraphs.forEach(paragraph => {
            paragraph.style.display = "none";
        });
        scrollUpButton.style.display = "block";
        centerButtons();
    });
  
    window.addEventListener("resize", function() {
        if (checkWindowSize()) {
            scrollUpButton.style.display = "block";
            scrollDownButton.style.display = "none";
            nav.style.display = "none";
            paragraphs.forEach(paragraph => {
                paragraph.style.display = "none";
            });
            centerButtons();
        } else {
            scrollUpButton.style.display = "none";
            scrollDownButton.style.display = "none";
            nav.style.display = "none";
            paragraphs.forEach(paragraph => {
                paragraph.style.display = "none";
            });
        }
    });
});