var isMaintenanceActive = false;
var redirectDelay = 1000;

document.addEventListener("DOMContentLoaded", function () {
    var maintenanceText = document.getElementById("maintenanceText");
    if (isMaintenanceActive) {
        document.cookie = "maintenance=true";
    } else {
        maintenanceText.style.display = "none";
        setTimeout(function () {
            window.location.href = "MAIN-СУМП.html";
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
