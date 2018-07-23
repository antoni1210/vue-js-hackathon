
<template>
  <section>
    <h1>Hello World</h1>
<<<<<<< HEAD
    <ul>
      <li v-for="todo in todos">{{ todo.text }}</li>
    </ul>
=======
>>>>>>> 4fecf89ee10a5794d304104ddda3ce2ac9fe2a94
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
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => console.log(res.data))
  }
};
</script>

<style></style>
