
<template>
  <section>
    <h1>Hello World</h1>
  </section>
</template>

<script>
import axios from 'axios';
import Autocomplete from './Autocomplete';


export default {
  name: 'Home',
  data() {
    return {
      venues: [],
    }
  },

  mounted() {
    axios({
      method: 'GET',
      url: `https://api.foursquare.com/v2/venues/search?categoryId=4bf58dd8d48988d17f941735&ll=51.5153,0.0725&client_id=QXJWRY5OPPFQ1RKWHMPWPFV3OSS5MQBFU0KNH22WOJASLAOT&client_secret=RMBIJZ3JWOO0DRXLSIWN5I21UX5V5TAZQBXB3CBUYVRTG3GJ&v=20180724`
    })
      .then(res => {

        console.log(res.data.response.venues)
      });
  }
};
</script>

<style></style>
