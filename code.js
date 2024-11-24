//я спитав за прикладом цього у ChatGPT...

function showBio() {
    var bio = document.getElementById("rozpovid");
    bio.style.display = bio.style.display === "none" ? "block" : "none";
}

function toggleColors() {
    var body = document.body;
    var mainContent = document.getElementById("Cvet");
    var bio = document.getElementById("rozpovid");
    var toggleButton = document.getElementById("knopochka");
    var knopka = document.getElementById("knopka");
    var textroZpOVid = document.querySelector(".textroZpOVid");

    var isDarkMode = body.classList.contains('dark-mode');

    if (isDarkMode) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');

        body.style.backgroundColor = "#aac7d8";
        mainContent.style.backgroundColor = "#dfebf6";
        mainContent.style.color = "black";
        bio.style.backgroundColor = "#dfebf6";
        bio.style.color = "black";
        toggleButton.style.backgroundColor = "black";
        toggleButton.style.color = "white";
        toggleButton.innerText = "2";
        knopka.style.color = "black";
        textroZpOVid.style.color = "black";
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');

        body.style.backgroundColor = "#222024";
        mainContent.style.backgroundColor = "#1E1D1F";
        mainContent.style.color = "white";
        bio.style.backgroundColor = "#1E1D1F";
        bio.style.color = "#FFD700";
        toggleButton.style.backgroundColor = "white";
        toggleButton.style.color = "black";
        toggleButton.innerText = "1";
        knopka.style.color = "white";
        textroZpOVid.style.color = "white";
    }
}