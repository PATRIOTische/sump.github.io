document.body.style.overflowY = 'auto';

const backgroundImages = [
    'assets/svg/--bg--theme-dark1.svg',
    'assets/svg/--bg--theme-dark2.svg',
    'assets/svg/--bg--theme-dark3.svg',
    'assets/svg/--bg--theme-dark4.svg'
];
    
const randomIndex = Math.floor(Math.random() * backgroundImages.length);
document.body.style.backgroundImage = `url(${backgroundImages[randomIndex]})`;

const resetPluginLogoFile = document.getElementById('resetPluginLogoFile');
resetPluginLogoFile.addEventListener('click', function() {
    const pluginLogoFile = document.getElementById('pluginLogoFile');
    pluginLogoFile.value = '';
    pluginLogo.src = 'https://i.ibb.co/0rKhfZB/no-img.png';
    pluginLogoLinkInput.disabled = false;
    pluginLogoFileInput.disabled = false;
});

const resetPluginFileFile = document.getElementById('resetPluginFileFile');
resetPluginFileFile.addEventListener('click', function() {
    const pluginFileFile = document.getElementById('pluginFileFile');
    pluginFileFile.value = '';
    pluginFileLinkInput.disabled = false;
    pluginFileFileInput.disabled = false;
});

const pluginLogoLinkInput = document.getElementById('pluginLogoLink');
const pluginLogoFileInput = document.getElementById('pluginLogoFile');
  
pluginLogoLinkInput.addEventListener('input', () => {
    if (pluginLogoLinkInput.value.length > 0) {
        pluginLogoFileInput.disabled = true;
    } else {
        pluginLogoFileInput.disabled = false;
    }
});
  
pluginLogoFileInput.addEventListener('change', () => {
    if (pluginLogoFileInput.files.length > 0) {
        pluginLogoLinkInput.disabled = true;
    } else {
        pluginLogoLinkInput.disabled = false;
    }
});
  
const pluginFileLinkInput = document.getElementById('pluginFileLink');
const pluginFileFileInput = document.getElementById('pluginFileFile');
  
pluginFileLinkInput.addEventListener('input', () => {
    if (pluginFileLinkInput.value.length > 0) {
        pluginFileFileInput.disabled = true;
    } else {
        pluginFileFileInput.disabled = false;
    }
});
  
pluginFileFileInput.addEventListener('change', () => {
    if (pluginFileFileInput.files.length > 0) {
        pluginFileLinkInput.disabled = true;
    } else {
        pluginFileLinkInput.disabled = false;
    }
});
  
const logoLinkInput = document.getElementById('pluginLogoLink');
const imageContainer = document.getElementById('imageContainer');
const pluginLogo = document.getElementById('pluginLogo');
const pluginLogoFile = document.getElementById('pluginLogoFile');
  
pluginLogoFile.addEventListener('change', function() {
    const file = this.files[0];
    const reader = new FileReader();
    reader.onload = function() {
        pluginLogo.src = reader.result;
    }
    reader.readAsDataURL(file);
});
  
logoLinkInput.addEventListener('input', function() {
    const logoLink = this.value;
    if (logoLink) {
        pluginLogo.src = logoLink;
    } else {
        pluginLogo.src = URL.createObjectURL(pluginLogoFile.files[0]);
              }
});
  
pluginLogo.addEventListener('error', function() {
    pluginLogo.src = "https://i.ibb.co/0rKhfZB/no-img.png";
});
  
document.getElementById("searchInput").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        searchPlugins();
    }
});

function validateForm() {
    const pluginName = document.getElementById('pluginName').value;
    const pluginDescription = document.getElementById('pluginDescription').value;
    const pluginLogoLink = document.getElementById('pluginLogoLink').value;
    const pluginLogoFile = document.getElementById('pluginLogoFile').files.length > 0;
    const yourNickname = document.getElementById('yourNickname').value;
    const pluginAVersion = document.getElementById('pluginAVersion').value;
    const developmentProgress = document.getElementById('developmentProgress').value;
    const pluginFileLink = document.getElementById('pluginFileLink').value;
    const pluginFileFile = document.getElementById('pluginFileFile').files.length > 0;
    const contactInfo = document.getElementById('contactInfo').value;
  
    const regex = /^[1-9][0-9]{0,2}$/;

    if (pluginName.length < 3 || pluginAVersion.length < 2 || pluginDescription.length < 16 || yourNickname.length < 3 || contactInfo.length < 5) {
        alert('⛔ Будь ласка, забезпечте всі необхідні дані.');
        return false;
    }

    if (!regex.test(developmentProgress)) {
        alert('⛔ Поле "developmentProgress" повинно містити число від 1 до 999.');
        return false;
    }
  
    if (!pluginLogoLink.startsWith('https://') && !pluginLogoLink.startsWith('http://') && !pluginLogoFile) {
        alert('⛔ Посилання на logo має починатися на http:// або https://, або ви маєте вибрати файл.');
        return false;
    }
  
    if (!pluginFileLink.startsWith('https://') && !pluginFileLink.startsWith('http://') && !pluginFileFile) {
        alert('⛔ Посилання на файл плагіну має починатися на http:// або https://, або ви маєте вибрати файл.');
        return false;
    }
  
    if ((pluginLogoLink && pluginLogoFile) || (!pluginLogoLink && !pluginLogoFile)) {
        if (pluginLogoLink.length < 8) {
            alert('⛔ Посилання на logo має містити не менше 8 символів, якщо воно заповнено.');
            return false;
        }
    }
  
    if ((pluginFileLink && pluginFileFile) || (!pluginFileLink && !pluginFileFile)) {
        if (pluginFileLink.length < 8) {
            alert('⛔ Посилання на файл плагіну має містити не менше 8 символів, якщо воно заповнено.');
            return false;
        }
    }
  
    return true;
}
              
async function publishTranslation() {
    const pluginName = document.getElementById('pluginName').value;
    const pluginDescription = document.getElementById('pluginDescription').value;
    const pluginLogoLink = document.getElementById('pluginLogoLink').value;
    const yourNickname = document.getElementById('yourNickname').value;
    const pluginFileLink = document.getElementById('pluginFileLink').value;
    const developmentProgress = document.getElementById('developmentProgress').value;
    const pluginAVersion = document.getElementById('pluginAVersion').value;
    const officialYes = document.getElementById('officialYes').checked;
    const officialNo = document.getElementById('officialNo').checked;
    const contactInfo = document.getElementById('contactInfo').value;
  
    const webhookUrl = 'https://discord.com/api/webhooks/1220836114483511326/RPHqrRdnCZeE4DfB23yiBgPac0xUGF7SGVefmed7QQNxC0o7EG0bYlv2DVK6j4vvQqlJ';
  
    const data = {
        content: '📨 Нова заявка на додавання перекладу опублікована!',
        embeds: [
            {
                title: 'Додавання перекладу',
                    description: `:jigsaw: **Назва плагіну:** ${pluginName}\n` +
                    `:notepad_spiral: **Опис плагіну:** ${pluginDescription}\n` +
                    `:man_guard: **Автор:** ${yourNickname}\n` +
                    `:game_die: **Версія плагіну:** ${pluginAVersion}\n` +
                    `:warning: **Ступінь завершення розробки:** ${developmentProgress}%\n` +
                    `:grey_question: **Офіційний переклад:** ${officialYes ? 'Так' : 'Ні'}\n` +
                    `:link: **Посилання на logo плагіну:** ${pluginLogoLink || "none"}\n` +
                    `:file_folder: **Посилання на файл плагіну:** ${pluginFileLink || "none"}\n` +
                    `:identification_card: **Контактна інформація:** ${contactInfo}`,
                color: 10816268,
                footer: {
                    text: 'Çпільнота укрãїніʓації ɱайнкрафт Плăгінів',
                    icon_url: 'https://i.ibb.co/zFzBFYy/favicon.png'
                }
            }
        ]
    };
  
    const response = await fetch(webhookUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
  
    if (response.ok) {
        closeModal('myModal');
        alert('✔ Ваша заявка на переклад була успішно надіслана. Очікуйте її розгляду.');
    } else {
        alert('⚠ Вибачте, виникла помилка під час надсилання заявки. Прохання спробувати ще раз пізніше.');
    }
}
  
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
  
function hoverButton(button) {
    var buttons = document.getElementsByClassName('nav-button');
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i] !== button) {
            buttons[i].classList.add('dimmed');
        }
    }            
}
  
function resetButtons() {
    var buttons = document.getElementsByClassName('nav-button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('dimmed');
    }
}
  
function updateTranslationCount() {
    var translationCountElement = document.getElementById("translationCount");
    var pluginCount = document.querySelectorAll("#pluginsContainer .plugin").length;
  
    var iconElement = document.createElement("i");
    iconElement.className = "fa-solid fa-file-circle-plus";
  
    translationCountElement.innerHTML = "";
  
    translationCountElement.appendChild(iconElement);
    translationCountElement.innerHTML += " Всього перекладів: " + pluginCount;
}
  
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}
  
function searchPlugins() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    var pluginsContainer = document.getElementById("pluginsContainer");
    var plugins = pluginsContainer.getElementsByClassName("plugin");
    var noResultsMessage = document.getElementById("noResultsMessage");
  
    var foundResults = false;
  
    for (var i = 0; i < plugins.length; i++) {
        var pluginName = plugins[i].getElementsByClassName("pluginName")[0].innerText.toLowerCase();
  
        if (pluginName.includes(searchTerm)) {
            plugins[i].style.display = "block";
            foundResults = true;
        } else {
            plugins[i].style.display = "none";
        }
    }
  
    if (foundResults) {
        noResultsMessage.style.display = "none";
    } else {
        noResultsMessage.style.display = "block";
    }
}
  
document.getElementById("searchButton").addEventListener("click", searchPlugins);
  
function resetSettingsAndShowAll() {
    var pluginsContainer = document.getElementById("pluginsContainer");
    var plugins = pluginsContainer.getElementsByClassName("plugin");
    var noResultsMessage = document.getElementById("noResultsMessage");
  
    for (var i = 0; i < plugins.length; i++) {
        plugins[i].style.display = "block";
    }
  
    noResultsMessage.style.display = "none";
}
  
function showLoadingOverlay() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "flex"; 
}
  
function hideLoadingOverlay() {
    var overlay = document.getElementById("overlay");
    overlay.style.display = "none"; 
}
  
var modal = document.getElementById("myModal");
  
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" || event.key === "Esc") {
        closeModal('myModal');
    }
});
  
function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}
  
showLoadingOverlay();
  
setTimeout(function() {
    hideLoadingOverlay();
}, 90);  
  
function showOfficialPlugins() {
    filterPlugins("official");
}
  
function showParticipantsPlugins() {
    filterPlugins("fromparticipants");
}

function showProjectPlugins() {
    filterPlugins("fromtheproject");
}
  
function filterPlugins(type) {
    var pluginsContainer = document.getElementById("pluginsContainer");
    var plugins = pluginsContainer.getElementsByClassName("plugin");
    var noResultsMessage = document.getElementById("noResultsMessage");
  
    var foundResults = false;
  
    for (var i = 0; i < plugins.length; i++) {
        var pluginType = plugins[i].getAttribute("data-type");
  
        if (pluginType === type) {
            plugins[i].style.display = "block";
            foundResults = true;
        } else {
            plugins[i].style.display = "none";
        }
    }
  
    if (!foundResults) {
        noResultsMessage.style.display = "block";
    } else {
        noResultsMessage.style.display = "none";
    }
}

function showDevelopmentPlugins() {
    filterPlugins("development");
}
  
function filterPlugins(type) {
        var pluginsContainer = document.getElementById("pluginsContainer");
        var plugins = pluginsContainer.getElementsByClassName("plugin");
        var noResultsMessage = document.getElementById("noResultsMessage");
  
        var foundResults = false;
  
        for (var i = 0; i < plugins.length; i++) {
        var pluginType = plugins[i].getAttribute("data-type");
  
        if (type === "development" && plugins[i].querySelector(".pluginBuild")) {
            plugins[i].style.display = "block";
            foundResults = true;
        } else if (pluginType === type) {
            plugins[i].style.display = "block";
            foundResults = true;
        } else {
            plugins[i].style.display = "none";
        }
    }
  
    if (!foundResults) {
        noResultsMessage.style.display = "block";
    } else {
        noResultsMessage.style.display = "none";
    }
}