import axios from "axios";
import MyLoader from "components/MyLoader/MyLoader";
import { useEffect } from "react";
import { useState } from "react";
import HomeItem from "../HomeItem/HomeItem";
import HomeList from "../HomeList/HomeList";

const Home = () => {
    const [popularMovie, setPopularMovie] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    
    useEffect(() => {
        try {
            const fetchDataPopular = async () => {
                const {data} = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=102d4305e0abdbf0fd48836d5abb1978&language=en-US&page=1`)
                console.log(data);
                setPopularMovie(data.results)
                setIsLoading(true)
                
        }
        fetchDataPopular()
        } catch (error) {
            console.log('eroor');
        } finally {
            setIsLoading(false)
        }
        
    }, [])
    
    return (
        <>
        {isLoading ? 
        <HomeList>
            <HomeItem item={popularMovie}/>
        </HomeList>
        : 
        <MyLoader />
    }
        
        </>
    )
}

export default Home;