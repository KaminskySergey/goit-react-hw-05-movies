import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import RevievsItem from "../RevievsItem/RevievsItem";

const RevievsList = ({isOpenRevievs}) => {
    const [revievs, setRevievs] = useState([])
    const {moviesId} = useParams()
    
    
    
    useEffect(() => {
        
        try {
            const fetchData = async () => {
                const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${moviesId}/reviews?api_key=102d4305e0abdbf0fd48836d5abb1978&language=en-US&page=1`)
                setRevievs(data.results)
            }
            
            fetchData()
        } catch (error) {
            console.log('error');
        } finally {
            
        }
    }, [moviesId])
    
    
    return (
        <>
        {
            isOpenRevievs && (revievs.length === 0 ? <p>There are no reviews for this movie.</p>
            :
            <ul>
            <RevievsItem moviesId={moviesId} revievItem={revievs}/>
            </ul>)
        }
        
        </>
    )
}
export default RevievsList;