(function () {
  var $root = document.getElementsByClassName('root')[0];
  if (window.hasEvent('touchstart')) {
    $root.dataset.isTouch = true;
    document.addEventListener('touchstart', function(){}, false);
  }
})();

const scrollToFirstContent = () => {
  const vh = window.innerHeight
  if (window.innerWidth < 500) {
    window.scrollTo(0, vh - 64)
  } else {
    window.scrollTo(0, vh - 80)
  }
}
