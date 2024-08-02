document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form-app');
    const popup = document.getElementById('popup');
    const iframe = document.getElementById('iframeHiddenConfirm');
  
    window.showPopup = function() {
      popup.classList.remove('hidden');
      popup.style.display = 'flex'; // используем flex для центрирования
    };
  
    window.closePopup = function() {
      popup.classList.add('hidden');
      popup.style.display = 'none';
      form.reset(); // очистка формы
    };
  
    // Скрытие поп-апа при загрузке iframe
    iframe.onload = function() {
      if (submitted) {
        showPopup();
        form.reset();
      }
    };
  });
  