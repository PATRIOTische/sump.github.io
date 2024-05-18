function hideToastItem() {
    const toastItem = document.querySelector('.toast-item.error');
    toastItem.style.display = 'none';
    isToastItemDisplayed = false;  
}
  
let isToastItemDisplayed = false;
  
function toggleToastItem() {
    const toastItem = document.querySelector('.toast-item');
    if (!isToastItemDisplayed) {
        toastItem.style.display = 'block';
        isToastItemDisplayed = true;
        setTimeout(hideToastItem, 8000);
    }
}