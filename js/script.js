'use-strict';
(function () {
    var carousel = document.querySelector('.main-carousel');
    var progressBar = document.querySelector('.carousel-progress-bar')
    var flkty = new Flickity(carousel, {cellALign: 'left', contain: true, hash: true});
    flkty.on('scroll', function(progress){
        progress = Math.max( 0, Math.min( 1, progress));
        progressBar.style.width = progress * 100 + '%';
    });
})();