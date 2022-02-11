import Axios from "axios";
import config from '../config.json';


const apiEndPoint=config.apiUrl+'/movies';
export function getMovies(){
   return Axios.get(apiEndPoint)
}
export function deleteMovies(movieId){
    return Axios.delete(apiEndPoint +'/'+movieId)
}
export function saveMovie(movie){
    return Axios.save(apiEndPoint +'/')
}