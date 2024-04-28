document.body.style.overflowY = 'auto';

const backgroundImages = [
    'assets/svg/--bg--theme-dark1.svg',
    'assets/svg/--bg--theme-dark2.svg',
    'assets/svg/--bg--theme-dark3.svg',
    'assets/svg/--bg--theme-dark4.svg'
];

const randomIndex = Math.floor(Math.random() * backgroundImages.length);
document.body.style.backgroundImage = `url(${backgroundImages[randomIndex]})`;

document.addEventListener('DOMContentLoaded', function () {

    const toggle = document.getElementById('toggle');
    toggle.addEventListener('change', function () {
        const darkImages = [
        'url("assets/svg/--bg--theme-dark1.svg")',
        'url("assets/svg/--bg--theme-dark2.svg")',
        'url("assets/svg/--bg--theme-dark3.svg")',
        'url("assets/svg/--bg--theme-dark4.svg")'
        ];

        const lightImages = [
        'url("assets/svg/--bg--theme-dark5.svg")',
        'url("assets/svg/--bg--theme-dark6.svg")',
        'url("assets/svg/--bg--theme-dark7.svg")',
        'url("assets/svg/--bg--theme-dark8.svg")'
        ];

        const randomDarkImage = darkImages[Math.floor(Math.random() * darkImages.length)];
        const randomLightImage = lightImages[Math.floor(Math.random() * lightImages.length)];

        if (toggle.checked) {
            document.body.style.backgroundImage = randomDarkImage;
            document.body.style.color = '#d0d0d0';
            document.querySelector('h1').style.color = '#FFFFFF';
            document.querySelector('h2').style.color = 'rgba(255, 255, 255, 0.650)';
            document.querySelector('.no-results').style.color = 'rgba(255, 255, 255, 0.77)';
        } else {
            document.body.style.backgroundImage = randomLightImage;
            document.body.style.color = '#1D1B1E';
            document.querySelector('h1').style.color = 'rgba(0, 0, 0, 0.77)';
            document.querySelector('h2').style.color = 'rgba(0, 0, 0, 0.65)';
            document.querySelector('.no-results').style.color = 'rgba(0, 0, 0, 0.77)';
        }
    });
});
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