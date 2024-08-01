var submitted = false;

window.onload = function() {
    var iframe = document.getElementById('iframeHiddenConfirm');
    iframe.onload = function() {
        if (submitted) {
            showPopup();
        }
    };
};

function showPopup() {
    var popupOverlay = document.getElementById('popup-overlay');
    var popup = document.getElementById('popup');
    popupOverlay.style.display = 'block';
    popup.style.display = 'block';
}

function closePopup() {
    var popupOverlay = document.getElementById('popup-overlay');
    var popup = document.getElementById('popup');
    popupOverlay.style.display = 'none';
    popup.style.display = 'none';
    window.location.reload();
}