'use-strict';
(function () {
    var carousel = document.querySelector('.main-carousel');
    var carouselMain = document.querySelector('.main-carousel');
    var restartButton = document.querySelector('.carousel-restart');
    var progressBar = document.querySelector('.carousel-progress-bar');

    var templateCities = document.getElementById('cities-list').innerHTML;
    var citiesDataLen = citiesData.length;
    var listItems = '';

    for (var i = 0; i < citiesDataLen; i++) {
        citiesData[i].number = i + 1;
        listItems += Mustache.render(templateCities, citiesData[i]);
    }

    carouselMain.insertAdjacentHTML('beforeend', listItems);
 
    var flkty = new Flickity(carousel, {cellALign: 'left', contain: true, hash: true});
    flkty.on('scroll', function(progress){
        progress = Math.max( 0, Math.min( 1, progress));
        progressBar.style.width = progress * 100 + '%';
    });

    restartButton.addEventListener('click', function() {
        flkty.select(0, true, false);
    })

    window.initMap = function() {
        var map = new google.maps.Map(document.getElementById('google-map'), {zoom: 7, center: citiesData[0].coordinates});
        for (var i = 0; i < citiesDataLen; i++) {
            var marker = new google.maps.Marker({
                position: citiesData[i].coordinates,
                map: map,
            });

            function markerClick(marker, i) {
                marker.addListener('click', function(){
                    flkty.select(i);
                });
            }

            markerClick(marker, i);

            flkty.on('change', function(index){
                map.setZoom(7);
                map.panTo(citiesData[index].coordinates);
            });
        }
    }
})();