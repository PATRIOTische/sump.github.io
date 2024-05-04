document.body.style.overflowY = 'auto';

const backgroundImages = [
    'assets/svg/--bg--theme-dark1.svg',
    'assets/svg/--bg--theme-dark2.svg',
    'assets/svg/--bg--theme-dark3.svg',
    'assets/svg/--bg--theme-dark4.svg'
];
  
const randomIndex = Math.floor(Math.random() * backgroundImages.length);
document.body.style.backgroundImage = `url(${backgroundImages[randomIndex]})`;
  
document.addEventListener("DOMContentLoaded", function() {
    const scrollUpButton = document.querySelector(".button-arrow-footer:first-of-type");
    const nav = document.querySelector("nav");
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

  
function showLoadingOverlay() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "flex"; 
}
  
function hideLoadingOverlay() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none"; 
}
  
function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}
  
showLoadingOverlay();
  
setTimeout(function() {
    hideLoadingOverlay();
}, 90);
  
const $ = (selector) => {
    return document.querySelector(selector);
};
      
const $hour = $('.hour')
const $min = $('.min')
const $sec = $('.sec')
  
const getTime = () => {
    const now = new Date();
    
    return {
        hour: String(now.getHours()).padStart(2, '0'),
        min: String(now.getMinutes()).padStart(2, '0'),
        sec: String(now.getSeconds()).padStart(2, '0'),
    };
}
  
const deactivateDigits = ($digits) => {
    $digits.forEach($number => $number.classList.remove('active'));
};
  
const setDigits = (section, digit) => {
    const $tens = [...section.children[0].children];
    const $ones = [...section.children[1].children];
  
    deactivateDigits($tens);
    deactivateDigits($ones);
  
    $tens[digit[0]].classList.add('active');
    $ones[digit[1]].classList.add('active');
};
  
const update = () => {
const time = getTime()
    setDigits($hour, time.hour);
    setDigits($min, time.min);
    setDigits($sec, time.sec);
};
  
update();
setInterval(update, 1000)