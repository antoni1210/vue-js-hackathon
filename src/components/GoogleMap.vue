<template>
  <div class="map"></div>
</template>

<script>
import axios from 'axios'
/* global google */
export default {
  name: 'GoogleMap',
  props: ['center', 'venues'],
  data() {
    return {
      chosenVenue: {}
    }
  },
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

          axios.get(`https://api.foursquare.com/v2/venues/${venue.id}?&client_id=XXTV2MIZMSYFKLRUU3DTCCYJK0LTJURZLL34ADQB5DWVQZM4&client_secret=PIRNU5TWFRTOUR5MN3KOQUDLNRGWDHYBCXF4QU15KNFFMPCL&v=20180724`)
            .then(res => {
              this.chosenVenue = res.data.response.venue;
              const venueInfo = document.querySelector('#venueInfo');
              venueInfo.innerHTML = `
              <div class="card">
                <div class="card-header">
                  <h1 class="title is2">${this.chosenVenue.name}</h1>
                </div>
                <div class="card-content">
                  ${this.chosenVenue.page.pageInfo.description}
                </div>
                <div class="card-footer">
                  <div class="card-footer-item">
                    ${this.chosenVenue.location.address}
                  </div>
                  <div class="card-footer-item">
                    ${this.chosenVenue.contact.phone}
                  </div>
                </div>
              </div>
              `
            });

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
