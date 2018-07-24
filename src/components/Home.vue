<template>
  <section class="section">
    <div class="container">
      <form  v-on:submit.prevent="handleSubmit()">
        <div class="field">
          <label class="label">Search</label>
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
  }
};

</script>

<style></style>
