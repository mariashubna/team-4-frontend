/**
 * Opening Mobile Menu
 */
function openMenu() {
  const backdrop = document.getElementById('backdrop')
  const classes = backdrop.classList
  classes.add('is-open')
}

/**
 * Closing Mobile Menu
 */
function closeMenu() {
  const backdrop = document.getElementById('backdrop')
  const classes = backdrop.classList
  classes.remove('is-open')
}

/**
 * Prevent OnClick From Child To Parent
 */
function menuLayoutClickHandler(event) {
  event.stopPropagation();
}