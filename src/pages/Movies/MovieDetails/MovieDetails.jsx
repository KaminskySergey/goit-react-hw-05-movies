import Box from "Box/Box";
import MyLoader from "components/MyLoader/MyLoader";
import { Suspense, useEffect, useState } from "react";

import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { Genres, GenresItem, Overview } from "./MovieDetails.styled";

import notImage from './not-image.png'


const MovieDetails = ({handleToggle}) => {
const [singleFilm, setSingleFilm] = useState()
const {moviesId} = useParams()
const [isLoading, setIsLoading] = useState(false)

const location = useLocation()
console.log(location);

const locationHome = useLocation()
useEffect(() => {
    setIsLoading(false)
fetch(`https://api.themoviedb.org/3/movie/${!moviesId ? '' : moviesId}?api_key=102d4305e0abdbf0fd48836d5abb1978&language=en-US`)
.then(response => response.json())
.then(obj => {
    setSingleFilm(obj)
    setIsLoading(true)
}).catch(err => console.log(err))
}, [moviesId])

if(singleFilm === undefined){
    return
}


return (
    <>
    <div style={{marginBottom: 16}}>
    <Link to={(location.state?.from ?? '/movies') || (locationHome.state?.from ?? '')}  style={{color: 'red', textDecoration: 'underline', fontWeight: '700', fontSize: 16, padding: 4, border: '1px solid red', borderRadius: 3}}>go to back</Link>
    </div>
        
        {isLoading ? <div>
        <Box display='flex' p={10}>

        <div>
            <img src={!singleFilm.poster_path ? notImage : `https://image.tmdb.org/t/p/w300/${singleFilm.poster_path}`} alt={singleFilm.original_title} />
        </div>
        <Box ml={30} display='flex' flexDirection='column' justifyContent='space-evenly'>
            
            <div>
            <h2>{singleFilm.original_title} ({singleFilm.release_date.substring(0,4)})</h2>
            <span>User Score: {singleFilm.vote_average.toFixed(1) * 10}%</span>
            </div>
            
            <div>
            <Overview>Overview</Overview>
            <span>{singleFilm.overview}</span>
            </div>
            
            <div>
            <Genres>Genres</Genres>
            <span>
                <Box display='flex'>
                    {
                        singleFilm.genres.map((el) => (
                            <GenresItem key={el.id}>{el.name}</GenresItem>
                        ))
                    }
                </Box>
            </span>
            </div>
        </Box>
    </Box>

    <div>
        <div>
            <p>Additional information</p>
            <ul>
                <li>
                    <Link state={{from: location.state?.from}} name='cast' onClick={(e) => handleToggle(e)} to='cast'>Cast</Link>
                </li>
                <li>
                    <Link state={{from: location.state?.from}} name='revievs' onClick={(e) => handleToggle(e)}  to='revievs'>Revievs</Link>
                </li>
            </ul>
            <Suspense>
                <Outlet />
            </Suspense>
            
        </div>
    </div>
        </div> :
        <MyLoader />}
        </>


)
}

export default MovieDetails;