
<template>
  <section>
    <google-map v-bind:venues="venues" />
    <ul>
      <li v-for="venue in venues">{{ venue.name }}</li>
    </ul>
    <button class="button" v-on:click="changeCategory">Click me!</button>
  </section>
</template>

<script>
import axios from 'axios';
import Autocomplete from './Autocomplete';
import GoogleMap from './GoogleMap';


export default {
  name: 'Home',
  data() {
    return {
      venues: []
    }
  },
  methods: {
    changeCategory: function() {
      console.log('hello world');
    }
  },

  mounted() {
    axios.get(`https://api.foursquare.com/v2/venues/search?categoryId=4bf58dd8d48988d17f941735&ll=51.5153,0.0725&client_id=QXJWRY5OPPFQ1RKWHMPWPFV3OSS5MQBFU0KNH22WOJASLAOT&client_secret=RMBIJZ3JWOO0DRXLSIWN5I21UX5V5TAZQBXB3CBUYVRTG3GJ&v=20180724`)
      .then(res => {
        this.venues = res.data.response.venues;
        // console.log(res.data.response.venues)
      });
  },
  components: {
    GoogleMap
  }
};
</script>

<style scoped>
.map {
  height: 400px;
}
</style>
