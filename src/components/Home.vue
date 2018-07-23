
<template>
  <section>
    <h1>Hello World</h1>
  </section>
</template>

<script>
import axios from 'axios';

  export default {
  name: 'Home',
  data() {
    return {
      venues: [],
    }
  },

  mounted() {
    axios
      .get('https://maps.googleapis.com/maps/api/place/radarsearch/application/json?location=51.503186,-0.126446&radius=5000&type=movie_theatre&key=AIzaSyD5l8LZyITAru4A3U8nyx-riblGU0yt6Cw')
      .then(res => {
        this.data.venues = res.results;
        console.log(res);
      });

  }
  };
</script>

<style></style>
