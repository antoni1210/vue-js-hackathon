<template>
  <div class="map"></div>
</template>

<script>

/* global google */
export default {
  name: 'GoogleMap',
  props: ['center', 'venues'],
  mounted () {
    this.map = new google.maps.Map(this.$el, {
      center: this.center || { lat: 51.515, lng: -0.078 },
      zoom: 13,
      styles: [
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffdfa6"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#b52127"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c5531b"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#74001b"
            },
            {
                "lightness": -10
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#da3c3c"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#74001b"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#da3c3c"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#990c19"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#74001b"
            },
            {
                "lightness": -8
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#6a0d10"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffdfa6"
            },
            {
                "weight": 0.4
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]
    });
    this.infoWindow = new google.maps.InfoWindow();
  },
  watch: {
    venues() {
      if (this.markers) this.markers.map(marker => marker.setMap(null));
      this.bounds = new google.maps.LatLngBounds();

      this.markers = this.venues.map(venue => {
        this.bounds.extend(venue.location);

        const marker = new google.maps.Marker({
          position: venue.location,
          map: this.map
        })
        marker.addListener('click', (target) => {
          console.log(venue);
          const venueInfo = document.querySelector('#venueInfo');
          venueInfo.innerHTML = `<div>${venue.name}</div>`
          // this.infoWindow.setContent(`
          //   <a href="/#/venues/${venue._id}">
          //   <h3>${venue.name}</h3>
          //   <p>${venue.address}</p>
          //   </a>
          //   `);
          //   this.infoWindow.open(this.map, marker);
        });
        return marker;
      });


        this.map.panTo(this.bounds.getCenter());
      },
      center() {
        this.map.setCenter(this.center);
        this.marker = new google.maps.Marker({
          position: this.center,
          map: this.map,
          label: '🎬'
        });
      }
    }
  };
  </script>
