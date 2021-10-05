import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight  } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'

class CardHeader extends React.Component {
    render() {
      const { Poster, Type} = this.props;
      let img = Poster;
      if (img === 'N/A') img = 'https://thaigifts.or.th/wp-content/uploads/2017/03/no-image.jpg';
      var style = { 
          backgroundImage: 'url(' + img + ')',
      };
      return (
        <header style={style} id={Poster} className="card-header">
          <h4 className="card-header--title">{Type}</h4>
        </header>
      )
    }
  }
  
  class Button extends React.Component {
    render() {
      return (
        <Link to={`/movie-app/details/${this.props.imdbID}`} target="_blank">
             <button className="button button-primary">
            <FontAwesomeIcon icon={faAngleRight} /> See more
            </button>
        </Link>
      )
    }
  }
  
  class CardBody extends React.Component {
    render() {
      return (
        <div className="card-body">
          <p className="imdbID">{this.props.imdbID}</p>
          
          <h2>{this.props.Title}</h2>
          
          <p className="body-content">{this.props.Year}</p>
          
          <Button imdbID={this.props.imdbID} />
        </div>
      )
    }
  }
  
  class Card extends React.Component {
    render() {
        const { movie } = this.props;
      return (
        <article className="card">
          <CardHeader Poster={movie.Poster} Type={movie.Type}/>
          <CardBody Title={movie.Title} imdbID={movie.imdbID} Year={movie.Year}/>
        </article>
      )
    }
  }
  
export default Card;