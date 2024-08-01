let submitted = false;

window.onload = function() {
    let iframe = document.getElementById('iframeHiddenConfirm');
    iframe.onload = function() {
        if (submitted) {
            showPopup();
        }
    };
};

function showPopup() {
    let popupOverlay = document.getElementById('popup-overlay');
    let popup = document.getElementById('popup');
    popupOverlay.style.display = 'block';
    popup.style.display = 'block';
}

function closePopup() {
    let popupOverlay = document.getElementById('popup-overlay');
    let popup = document.getElementById('popup');
    popupOverlay.style.display = 'none';
    popup.style.display = 'none';
    window.location.reload();
}