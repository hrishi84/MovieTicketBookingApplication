<template>
 
  <div class = "title">
    <img src="../assets/unnamed.png"></img>
    <h1>TICKETER </h1>
    <h2> the modern movie booking application</h2>
  
  <div class = "movie"
    v-for="(movie,index) in movies"
    v-bind:item="movie"
    v-bind:index="index"
    v-bind:key="movie._id"
  >
  
  <p class="text">{{movie.title}}</p>
  
  <p class="date"> Release Date: {{formatDate(movie.releaseDate)}}</p>
  <p class="text"
    v-for="(language,index) in movie.language"
    v-bind:item="language"
    v-bind:index="index"
    v-bind:key="movie.language[index]">
    {{language}}
  </p>
  <button @click="click(movie.title)" >BOOK</button>
  </div>
  </div>
</template>

<script>
import MovieService from '../MovieService'
export default {
  name: 'MovieComponent',
  data() {
    return {
      movies: [],
      error : "",
      title : "",
      releaseDate : new Date()
    }
  },
  async created(){
    try{
      this.movies = await MovieService.getMovies();
   }catch(err){
     this.error = err.message;
   }
  },methods: {
     formatDate(date) {
        var monthNames = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ];
      
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
      
        return day + ' ' + monthNames[monthIndex] + ' ' + year;
      },
      click(title){
        this.$router.push({name:'shows',params:{movie: title}})
      }

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
div.movie{
  position: relative;
  border: 1px solid black;
  color: white;
  background-color: #C91F37;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}
</style>
