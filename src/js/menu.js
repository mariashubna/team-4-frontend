window.openMenu = function openMenu() {
  const backdrop = document.getElementById('backdrop');
  const classes = backdrop.classList;
  classes.add('is-open');
}

window.closeMenu = function closeMenu() {
  const backdrop = document.getElementById('backdrop');
  const classes = backdrop.classList;
  classes.remove('is-open');
}

window.menuLayoutClickHandler = function menuLayoutClickHandler(event) {
  event.stopPropagation();
}