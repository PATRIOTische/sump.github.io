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