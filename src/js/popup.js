window.submitted = false;

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form-app');
    const popup = document.getElementById('popup');
    const iframe = document.getElementById('iframeHiddenConfirm');

    // Определение функции showPopup
    window.showPopup = function() {
        popup.classList.remove('hidden');
        popup.style.display = 'flex'; // используем flex для центрирования
    };

    // Определение функции closePopup
    window.closePopup = function() {
        popup.classList.add('hidden');
        popup.style.display = 'none';
        form.reset(); // очистка формы
    };

    // Обработчик загрузки iframe
    iframe.onload = function() {
        if (window.submitted) {
            showPopup();
        }
    };

    // Устанавливаем submitted в true при отправке формы
    form.onsubmit = function() {
        window.submitted = true;
    };
});