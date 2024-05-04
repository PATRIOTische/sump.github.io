document.body.style.overflowY = 'auto';

const backgroundImages = [
    'assets/svg/--bg--theme-dark1.svg',
    'assets/svg/--bg--theme-dark2.svg',
    'assets/svg/--bg--theme-dark3.svg',
    'assets/svg/--bg--theme-dark4.svg'
];

const randomIndex = Math.floor(Math.random() * backgroundImages.length);
document.body.style.backgroundImage = `url(${backgroundImages[randomIndex]})`;

const prevButton = document.querySelector('.prev-mobile');
const nextButton = document.querySelector('.next-mobile');
const slides = document.querySelectorAll('.item-mobile');
const buttonMobile = document.querySelector('.button-mobile');

let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function prevSlide() {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
}

function buttonClickHandler() {
    nextSlide(); 
    buttonMobile.style.display = 'none'; 
     setTimeout(function() {
        buttonMobile.style.display = 'block'; 
    }, 400); 
}

buttonMobile.addEventListener('click', buttonClickHandler);
showSlide(currentIndex);


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

const $next = document.querySelector('.next');
const $prev = document.querySelector('.prev');

$next.addEventListener(
    'click',
    () => {
        const items = document.querySelectorAll('.item');
        document.querySelector('.slide').appendChild(items[0]);
    },
);

$prev.addEventListener(
    'click',
    () => {
        const items = document.querySelectorAll('.item');
        document.querySelector('.slide').
        prepend(items[items.length - 1]);
    },
);

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