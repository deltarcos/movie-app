import React from 'react';
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';
import Fade from 'react-reveal/Fade';

const MovieList = (props) => {
    const movies = props.movies;
    return (
        <>
            <div className='container'>
                {movies.map((movie, index) =>
                    <Fade bottom key={uuidv4()}>
                        <div className='item'>
                            <Card movie={movie}/>
                        </div>
                    </Fade>
                )}
            </div>
        </>
    )
}

export default MovieList;