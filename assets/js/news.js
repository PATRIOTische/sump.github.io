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

// Get the news container and the news blocks
const newsContainer = document.querySelector('.news-container');
const newsBlocks = newsContainer.querySelectorAll('.news-block');

// Get the arrow elements
const prevArrow = document.querySelector('[data-arrow="prev"]');
const nextArrow = document.querySelector('[data-arrow="next"]');

// Get the title and text elements
const titleElement = document.querySelector('.news0-title');
const textElement = document.querySelector('.news0-text');

// Initialize the current news index
let currentNewsIndex = 0;

// Function to update the UI
function updateUI() {
  const currentNewsBlock = newsBlocks[currentNewsIndex];
  const newsTitle = currentNewsBlock.querySelector('.news-title').textContent;
  const newsText = currentNewsBlock.querySelector('.news-text').textContent;
  const newsBackgroundImage = currentNewsBlock.style.backgroundImage;

  titleElement.textContent = newsTitle;
  textElement.textContent = newsText;
  document.querySelector('.centered-block').style.backgroundImage = newsBackgroundImage;

  // Disable the prev arrow if it's the first news item
  prevArrow.disabled = currentNewsIndex === 0;

  // Disable the next arrow if it's the last news item
  nextArrow.disabled = currentNewsIndex === newsBlocks.length - 1;
}

// Add event listeners to the arrows
prevArrow.addEventListener('click', () => {
  if (currentNewsIndex > 0) {
    currentNewsIndex--;
    updateUI();
  }
});

nextArrow.addEventListener('click', () => {
  if (currentNewsIndex < newsBlocks.length - 1) {
    currentNewsIndex++;
    updateUI();
  }
});

// Initialize the UI
updateUI();

// Check if there are no news items
if (newsBlocks.length === 0) {
  titleElement.textContent = '<i class="fa-solid fa-triangle-exclamation"></i> ERROR';
}