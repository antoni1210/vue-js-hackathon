
<template>
  <div>
    <google-map v-bind:venues="venues"/>
    <section class="section">
      <div class="container">
        <!-- <ul>
        <li v-for="venue in venues">{{ venue.name }}</li>
      </ul> -->
      <div class="columns">
        <div class="column is-8">
          <div class="field">
            <div class="label">Please select a category</div>
            <div class="control">
              <div class="select">
                <select v-model="category">
                  <option value="4bf58dd8d48988d17f941735">Cinema</option>
                  <option value="4bf58dd8d48988d137941735">Theatre</option>
                  <option value="4bf58dd8d48988d18e941735">Comedy Club</option>
                  <option value="4bf58dd8d48988d1e5931735">Music Venue</option>
                </select>
              </div>
            </div>


            <label class="label">Search</label>
            <div class="control">
              <Autocomplete name="Search" v-bind:handle-place-change="handlePlaceChange"/>
              <button class="button" v-on:click="changeCategory">Click me!</button>
            </div>

          </div>
        </div>
        <div class="column is-4" id="venueInfo">
          Venue Info Here. Click a Marker for more.
        </div>
      </div>

    </div>
  </form>

</section>
</div>
</template>

<script>
import axios from 'axios';
import Autocomplete from './Autocomplete';
import GoogleMap from './GoogleMap';


export default {
  name: 'Home',
  data() {
    return {
      venues: [],
      category: '4bf58dd8d48988d17f941735',
      location: {},
      address: {}
    }
  },
  methods: {
    changeCategory: function() {
      axios.get(`https://api.foursquare.com/v2/venues/search?categoryId=${this.category}&ll=${this.location.lat},${this.location.lng}&client_id=XXTV2MIZMSYFKLRUU3DTCCYJK0LTJURZLL34ADQB5DWVQZM4&client_secret=PIRNU5TWFRTOUR5MN3KOQUDLNRGWDHYBCXF4QU15KNFFMPCL&v=20180724`)
      .then(res => {
        this.venues = res.data.response.venues;
      });
    },
    handlePlaceChange({ formatted_address: address, geometry: { location } }) {
      this.address = address;
      this.location = location.toJSON();
    }
  },

  mounted() {
    axios.get(`https://api.foursquare.com/v2/venues/search?categoryId=${this.category}&ll=51.5153,0.0725&client_id=XXTV2MIZMSYFKLRUU3DTCCYJK0LTJURZLL34ADQB5DWVQZM4&client_secret=PIRNU5TWFRTOUR5MN3KOQUDLNRGWDHYBCXF4QU15KNFFMPCL&v=20180724`)
    .then(res => {
      this.venues = res.data.response.venues;
    });
  },
  components: {
    GoogleMap,
    Autocomplete
  }
};
</script>

<style scoped>
.map {
  height: 400px;
}
</style>
