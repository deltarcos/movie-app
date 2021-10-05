import React, { useState, useEffect } from 'react';
import MovieList from "./MovieList";
import Search from "./Search";
import Fade from 'react-reveal/Fade';
import LocalMoviesOutlinedIcon from '@mui/icons-material/LocalMoviesOutlined';

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [s, setS] = useState('marvel');

    const getMovieRequest = async (s) => {
        const url = `https://www.omdbapi.com/?apikey=c6746dee&s=${s}`;
    
        const resp = await fetch(url);
        const respJson = await resp.json();
    
        if (respJson.Response == 'False') {
        setMovies([]);
        } else {
        setMovies(respJson.Search)
        }
    };

    useEffect(() => {
        getMovieRequest(s);
    }, [s]);

    const onSearchVal = async (val) => {
        setS(val);
    }
    return(
        <div className='main'>
            <p className='logo-app'><LocalMoviesOutlinedIcon /></p>
            <p className='title-app'>Search Movie app</p>
            <Search onSearch={onSearchVal} />
            <Fade bottom>
            <MovieList movies={movies} />
            </Fade>
        </div>
    )
}

export default Main;