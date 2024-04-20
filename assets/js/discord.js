function checkUser() {
    if (document.readyState === 'complete') {
        setTimeout(function() {
            window.location.href = "https://discord.com/invite/tQXzycVVJG";
        }, 150);
    } else {
        setTimeout(checkUser, 500);
    }
}

window.addEventListener('popstate', function(event) {
    if (history.state && history.state.fromDiscord) {
        window.location.href = "index.html";
    } else {
        checkUser();
    }
});

checkUser();

checkUser();

const backgroundImages = [
    'assets/svg/--bg--theme-dark1.svg',
    'assets/svg/--bg--theme-dark2.svg',
    'assets/svg/--bg--theme-dark3.svg',
    'assets/svg/--bg--theme-dark4.svg'
];

const randomIndex = Math.floor(Math.random() * backgroundImages.length);
document.body.style.backgroundImage = `url(${backgroundImages[randomIndex]})`;