import React, { useState, useEffect } from 'react';
import { Route, useParams } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

const MovieDetail = ({ match }) => {
    return (
        
      <Route path={"/movie-app/details/:movieId"}>
          <GetDetails/>
      </Route>
    )
}

const GetDetails = () => {
    const { movieId } = useParams();
    const [ movieDetails, setMovieDetails ] = useState({});
    
    const getMovieDetails = async (s) => {
        const url = `https://www.omdbapi.com/?apikey=c6746dee&i=${movieId}`;    
        const resp = await fetch(url);
        const respJson = await resp.json();
    
        if (respJson.Response == 'False') {
            setMovieDetails([]);
            console.log("f movieDetails = " + movieDetails)
        } else {
            setMovieDetails(respJson)
        }
    };

    useEffect(() => {
        getMovieDetails(movieId);
    }, [movieId]);

    return (
        <Fade>
            <Detail data={movieDetails}/>
        </Fade>
    )
}

const Detail = ({ data }) => {
      let img = data.Poster;
      if (img === 'N/A') img = 'https://thaigifts.or.th/wp-content/uploads/2017/03/no-image.jpg';
    return (
        <>
        <div className="main">
            <div className="container">
                <div className="desc-item" style={{textAlign:'center'}}>
                    <img src={img} style={{maxHeight:'500px', borderRadius:'8px'}}></img>
                </div>
                <div className="desc-item">
                    <h1 style={{fontSize:'4rem'}}>{data.imdbRating}</h1>
                    <h1>{data.Title}</h1>
                    <p style={{padding:'10px 0'}}>{data.Plot}</p>
                    <p className="desc-line"><strong>Year : </strong>{data.Year}</p>
                    <p className="desc-line"><strong>Released : </strong>{data.Released}</p>
                    <p className="desc-line"><strong>Rated : </strong>{data.Rated}</p>
                    <p className="desc-line"><strong>Runtime : </strong>{data.Runtime}</p>
                    <p className="desc-line"><strong>Genre : </strong>{data.Genre}</p>
                    <p className="desc-line"><strong>Director : </strong>{data.Director}</p>
                    <p className="desc-line"><strong>Actors : </strong>{data.Actors}</p>
                    <p className="desc-line"><strong>Writer : </strong>{data.Writer}</p>
                    <p className="desc-line"><strong>Language : </strong>{data.Language}</p>
                    <p className="desc-line"><strong>Country : </strong>{data.Country}</p>
                    <p className="desc-line"><strong>Awards : </strong>{data.Awards}</p>
                    <p className="desc-line"><strong>BoxOffice : </strong>{data.BoxOffice}</p>
                </div>
            </div>
        </div>
    </>
    )
}

export default MovieDetail;