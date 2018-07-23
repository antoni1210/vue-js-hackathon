
<template>
  <section>
    <h1>Hello World</h1>
    <ul>
      <li v-for="todo in todos">{{ todo.text }}</li>
    </ul>
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
      todos: [
        { text: 'Learning JavaScript'},
      ]
    }
  },

  mounted() {
    axios
    .get('/venues')
      .then(res => {
        console.log(res);
      });

  }
  };
</script>

<style></style>
