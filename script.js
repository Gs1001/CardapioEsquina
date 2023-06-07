var scrollAnimations = document.querySelectorAll('.scroll-animation');

function scrollReveal() {
  for (var i = 0; i < scrollAnimations.length; i++) {
    var element = scrollAnimations[i];
    var position = element.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (position < windowHeight) {
      element.classList.add('show');
    }
  }
}

window.addEventListener('scroll', scrollReveal);
window.addEventListener('load', scrollReveal);