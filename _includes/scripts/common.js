(function () {
  var $root = document.getElementsByClassName('root')[0];
  if (window.hasEvent('touchstart')) {
    $root.dataset.isTouch = true;
    document.addEventListener('touchstart', function(){}, false);
  }
})();
window.onload = () => {
  document.querySelector("#skip-to-content").addEventListener("click", e => {
    e.preventDefault()
    if (document.querySelector(".prompt-arrow")) {
      scrollToFirstContent()
    } 
    const pageContent = document.querySelector('.page__content')
    const firstFocusable = pageContent.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
    if (firstFocusable) {
      firstFocusable.focus()
    }
  })
}
