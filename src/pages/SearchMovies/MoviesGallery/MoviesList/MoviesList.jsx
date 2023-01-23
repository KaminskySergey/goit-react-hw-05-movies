import MoviesItem from "pages/SearchMovies/MoviesItem/MoviesItem";

const MoviesList = ({item}) => {
    return (
        <>
        <ul>
            <MoviesItem item={item}/>
        </ul>
        </>
    )
}

export default MoviesList;