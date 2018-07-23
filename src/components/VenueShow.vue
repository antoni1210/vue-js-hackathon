<template>
    <section class="section">
      <h1>Hello World</h1>

      <h2 class="subtitle is-5">{{ venue.address }}</h2>
    <div class="column">
      <google-map v-bind:center="venue.location" />
    </div>
  </section>
</template>

  <script>
    import axios from 'axios';
    import GoogleMap from './GoogleMap';
    export default {
      name: 'VenueShow',
      data() {
        return {
          venue: {}
        };
      },

      components: {
        GoogleMap
      }
    };
    </script>

    <style scoped>
    .map {
      height: 250px;
    }
    </style>
