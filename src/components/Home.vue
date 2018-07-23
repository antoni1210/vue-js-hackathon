
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
    const config = {
      headers: { API_KEY: 'AIzaSyDdsDypPEp9X7T8qg-p41_pz_c2EYsqr8Y' }
    }
    axios.get('https://maps.googleapis.com/maps/api/place/radarsearch/application/json?location=51.503186,-0.126446&radius=5000&type=movie_theatre', config)

  //   axios({
  //     method: 'GET',
  //     url: 'https://maps.googleapis.com/maps/api/place/radarsearch/application/json?location=51.503186,-0.126446&radius=5000&type=movie_theatre',
  // })
  //   .then(res => {
  //   console.log(res.data);
  // });
    }
  };
</script>

<style></style>
