import axios from "axios";

const url = 'http://localhost:5100/api/shows/';

class MovieService{
   
    static getShows(movie){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(movie =>({
                        ...movie,
                        releaseDate : new Date(movie.releaseDate)
                    }))
                )
            }catch(err){
                reject(err);
            }
        })
    }

    
}

export default MovieService;