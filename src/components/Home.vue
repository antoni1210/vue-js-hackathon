
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
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => console.log(res.data))
  }
};
</script>

<style></style>
