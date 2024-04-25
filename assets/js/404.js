const backgroundImages = [
    'assets/svg/--bg--theme-dark1.svg',
    'assets/svg/--bg--theme-dark2.svg',
    'assets/svg/--bg--theme-dark3.svg',
    'assets/svg/--bg--theme-dark4.svg'
];

const randomIndex = Math.floor(Math.random() * backgroundImages.length);
document.body.style.backgroundImage = `url(${backgroundImages[randomIndex]})`;