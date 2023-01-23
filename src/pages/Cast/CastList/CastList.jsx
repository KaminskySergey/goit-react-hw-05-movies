import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CastItem from "../CastItem/CastItem";
import { List } from "./CastList.styled";



const CastList = ({isOpenCast}) => {
    const [actors, setActors] = useState([])
    const {moviesId} = useParams()


    useEffect(() => {
        
        fetch(`https://api.themoviedb.org/3/movie/${moviesId}/credits?api_key=102d4305e0abdbf0fd48836d5abb1978&language=en-US`)
        .then(res => res.json())
        .then(obj => {
            setActors(obj)
        })
        .catch(err => console.log('error'))
    }, [moviesId])
    if(actors === []){
        return;
    }
    if(actors.cast === undefined){
        return;
    }
    return (
        <>
        
        {
            isOpenCast && 
            <List>
            <CastItem actors={actors.cast}/>
        </List>
        }
        </>
    )
}

export default CastList;