import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MoviesList from "./MoviesGallery/MoviesList/MoviesList";
import MoviesSearch from "./MoviesSearch/MoviesSearch";

const Movies = () => {
    const [moviesSearch, setMoviesSearch] = useState([])
    const [seachParams, setSearchParams] = useSearchParams()
const query = seachParams.get('query') ?? '';
    

    const handleSearchParams = value => {
        console.log(value);
        setSearchParams('query' !== '' ? {query: value} : {})
    }
    /////////////
    
    //////////////
    useEffect(() => {
        try {
            if(!query){
                return;
            }
            const fetchDataSearch = async () => {
                const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=102d4305e0abdbf0fd48836d5abb1978&language=en-US&page=1&include_adult=false&query=${query}`)
                setMoviesSearch(data.results)
                
            }
            
            fetchDataSearch()
            
            
        } catch (error) {
            setMoviesSearch([])
            
console.log('We were unable to process your request');
        } 
    }, [query])
   
    console.log(moviesSearch);
return (
    <>
    <MoviesSearch moviesSearch={moviesSearch}  handleSearchParams={handleSearchParams}/>
     <MoviesList item={moviesSearch}/>
    </>
)
}

export default Movies;