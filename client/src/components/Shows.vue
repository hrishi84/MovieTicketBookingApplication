<template>
    <div>
        <p class="text">Available Shows for</p>
        
    </div>
</template>
<script>
export default {
    name: 'ShowsComponent',
    data(){
        return{
            shows: [],
            error: ""
        }
    },
    async created(){
        this.shows = await ShowsService.getShows($route.params.movie);
    }
}
</script>
