import { Link, useLocation } from "react-router-dom";

const HomeItem = ({item}) => {
    const locationHome = useLocation()
    
    return (
        <>
        {
            item.map((el) => (
                
                <li key={el.id}>
                    <Link state={{from: locationHome}}  to={`/movies/${el.id}`}>
                    {el.title}
                    </Link>
                </li>
            ))
        }
        </>
    )
}

export default HomeItem;