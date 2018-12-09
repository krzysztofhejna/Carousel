'use-strict';
(function () {
    var carousel = document.querySelector('.main-carousel');
    var flkty = new Flickity(carousel, {cellALign: 'left', contain: true, hash: true});
    flkty(carousel);
})();