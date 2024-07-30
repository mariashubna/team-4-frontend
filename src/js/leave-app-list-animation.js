

//leave application animation
let leaveAppList = document.querySelector('.leave-app-card-list');

function isInViewport(element) {
  let rect = element.getBoundingClientRect();
  let html = document.documentElement;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || html.clientHeight) &&
    rect.right <= (window.innerWidth || html.clientWidth)
  );
}

if(isInViewport(leaveAppList)) {
  leaveAppList.children[0].style.opacity = "1";
  leaveAppList.children[1].style.opacity = "1";
  leaveAppList.children[2].style.opacity = "1";
}else {
  window.addEventListener('scroll', () => {
    if (isInViewport(leaveAppList)) {
      leaveAppList.classList.add('anim-fade-in');
    }
  });
}