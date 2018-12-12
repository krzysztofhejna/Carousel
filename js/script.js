'use-strict';
(function () {
    var carousel = document.querySelector('.main-carousel');
    var carouselMain = document.querySelector('.main-carousel');
    var restartButton = document.querySelector('.carousel-restart');
    var progressBar = document.querySelector('.carousel-progress-bar');

    var templateCities = document.getElementById('cities-list').innerHTML;
    var listItems = '';

    for (var i = 0; i < citiesData.length; i++) {
        console.log (citiesData);
        citiesData[i].number = i + 1;
        listItems += Mustache.render(templateCities, citiesData[i]);
        console.log(listItems);
    }

    carouselMain.insertAdjacentHTML('beforeend', listItems);
 
    var flkty = new Flickity(carousel, {cellALign: 'left', contain: true, hash: true});
    flkty.on('scroll', function(progress){
        progress = Math.max( 0, Math.min( 1, progress));
        progressBar.style.width = progress * 100 + '%';
    });

    restartButton.addEventListener('click', function(event) {
        flkty.select(0, true, false);
    })
})();