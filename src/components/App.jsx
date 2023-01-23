import Layout from "./Layout/Layout";
import Box from '../Box/Box'
import {lazy, Suspense} from 'react'

import { Routes, Route, BrowserRouter } from "react-router-dom";

// import Home from "pages/Home/Home/Home";
// import Movies from "pages/SearchMovies/Movies";

import MovieDetails from "pages/Movies/MovieDetails/MovieDetails";
import NotFound from "./NotFound/NotFound";
import CastList from "pages/Cast/CastList/CastList";
import { useState } from "react";
import Revievs from "pages/Revievs/RevievsList/RevievsList";
import { ColorRing } from "react-loader-spinner";


const Home = lazy(() => import("pages/Home/Home/Home"))
const Movies = lazy(() => import("pages/SearchMovies/Movies"))

export const App = () => {
  const [isOpenCast, setIsOpenCast] = useState(false)
  const [isOpenRevievs, setIsOpenRevievs] = useState(false)
  // const [toggle, isToggle] = useState(false)
  

const handleToggle = (e) => {
  // isToggle(pS => !pS)
  const {name} = e.target
  
  switch (name) {
    case 'cast':
      setIsOpenCast(pS => !pS)
      
      break;
    case 'revievs':
      setIsOpenRevievs(pS => !pS)
      

      break;
    default:
      return;
  }
    
}




  return (
    <>
    <BrowserRouter basename="goit-react-hw-05-movies">
    <Box m='0 auto' width={1200} backgroundColor='gray' p='0 15px'>
    <Layout>
    <Suspense fallback={<ColorRing />}>
    <Routes >
      <Route path="" element={ <Home/>}/>
      <Route path="/movies" element={ <Movies />} />
      <Route path="/movies/:moviesId" element={ <MovieDetails handleToggle={handleToggle}/>}>
        <Route path="cast" element={ <CastList isOpenCast={isOpenCast}/>}/>
        <Route path="revievs" element={ <Revievs isOpenRevievs={isOpenRevievs}/>}/>
      </Route> 


      <Route path="*" element={<NotFound />}/>
    </Routes>
    </Suspense>
</Layout>
</Box>
    </BrowserRouter>
    </>
    
  );
};
