<template>
  <section class="section">
    <div class="container">
      <form  v-on:submit.prevent="handleSubmit()">
        <div class="field">
          <label class="label">search</label>
          <div class="control">
            <Autocomplete name="Search" v-bind:handle-place-change="handlePlaceChange"/>
          </div>
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>

import axios from 'axios';
import Autocomplete from './Autocomplete';

export default {
  name: 'VenueSearch',
  data() {
    return {
      venue: {}
    };
  },
  methods: {
    handlePlaceChange({ formatted_address: address, geometry: { location } }) {
      this.venue.address = address;
      this.venue.location = location.toJSON();
      console.log(this.venue);
    }
  },
  components: {
    Autocomplete
  },
  mounted() {
    axios.get(`https://api.foursquare.com/v2/venues/search?categoryId=4bf58dd8d48988d17f941735&ll=51.5153,0.0725&client_id=QXJWRY5OPPFQ1RKWHMPWPFV3OSS5MQBFU0KNH22WOJASLAOT&client_secret=RMBIJZ3JWOO0DRXLSIWN5I21UX5V5TAZQBXB3CBUYVRTG3GJ&v=20180724`)
      .then(res => {
        this.venues = res.data.response.venues;
        console.log(res.data.response.venues)
      });
  }
};


</script>

<style></style>
