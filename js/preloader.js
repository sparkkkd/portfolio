document.body.onload = function () {
  setTimeout(function() {
    var preloader = document.getElementById('preloader')
    if (!preloader.classList.contains('preloader_done')) {
      preloader.classList.add('preloader_done');
    }
  }, 1000);
}