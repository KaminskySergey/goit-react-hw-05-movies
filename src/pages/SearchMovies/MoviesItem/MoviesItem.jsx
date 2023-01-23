import { Link, useLocation } from "react-router-dom";

const MoviesItem = ({item}) => {
    console.log(item);
    const location = useLocation()
    return (
        <>
        {
            item.map((el) => (
                <li key={el.id}>
                    <Link to={`/movies/${el.id}`} state={{from: location}}>{el.original_title} ({el.release_date.substring(0,4)})</Link>
                </li>
            ))
        }
        </>
    )
}

export default MoviesItem;