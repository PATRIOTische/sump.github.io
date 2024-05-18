var isMaintenanceActive = false;

var maintenanceText = isMaintenanceActive ? 'ON' : (isMaintenanceActive === false ? 'OFF' : '?');
var maintenanceClass = isMaintenanceActive ? 'on' : (isMaintenanceActive === false ? 'off' : 'unknown');

var maintenanceElement = document.querySelector('.maintenance span');
maintenanceElement.innerText = maintenanceText;
maintenanceElement.className = maintenanceClass;

var redirectDelay = 1000;

document.addEventListener("DOMContentLoaded", function () {
    var maintenanceText = document.getElementById("maintenanceText");
    if (isMaintenanceActive) {
        document.cookie = "maintenance=true";
    } else {
        maintenanceText.style.display = "none";
        setTimeout(function () {
            window.location.href = "main.html";
        }, redirectDelay);
    }
});

function reloadButton() {
    location.reload();    
}

document.addEventListener("DOMContentLoaded", function () {
    var maintenanceMessage = document.getElementById("maintenanceMessage");
    if (isMaintenanceActive) {
        maintenanceMessage.style.display = "block";
    }
});

function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}
  
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}