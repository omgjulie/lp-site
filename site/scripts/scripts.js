// ISOTOPE

function isotope_init() {
    var $grid = $('.grid').isotope({
        // options
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
      });

      $('.filter-button-group').on('click', 'button', function(){
        $('.is-checked')[0].classList.remove('is-checked');
        $(this)[0].classList.add('is-checked');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({filter: filterValue});
      })
}

// OWL CAROUSEL

function carousel_init() {
      $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
      });
}

// TO TOP Button

function to_top(){
  var btn = $('.totop-button');
      $(window).scroll(function(){
          if ($(window).scrollTop() > 300){
              btn.addClass('show');
          }
          else {
              btn.removeClass('show');
          }
      });
       
      btn.on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({scrollTop:0}, '300');
      })
}

// MAP

function initMap() {
    // The location of Kyiv
    var kyiv = {lat: 50.431782, lng: 30.516382};
    // The map, centered at Kyiv
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 12, 
            center: kyiv,
            styles: [
                {
                    "featureType": "all",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "weight": "2.00"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#9c9c9c"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 45
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#7b7b7b"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#46bcec"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#c8d7d4"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#070707"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                }
            ]
            
        });
    // The marker, positioned at Kyiv
    var marker = new google.maps.Marker({position: kyiv, map: map, animation: google.maps.Animation.BOUNCE});
  }

//  MAP Overlay 

function mapOverlayHidden(){
    var mapTitle = $('.map-title'),
        mapOverlay = $('.map-overlay'),
        sectionMap = $('.map-section');

        mapTitle.click(function(){
            mapOverlay.addClass('hidden');
        });

        $(document).click(function(e){
            if((mapTitle.has(e.target).length === 0) && (sectionMap.has(e.target).length !== 1 )) {
            mapOverlay.removeClass('hidden');
            }
        });
}

// READY

$(document).ready(function(){
      isotope_init();
      carousel_init();
      to_top();
      mapOverlayHidden();
  });