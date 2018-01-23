import React from 'react';
import Moment from 'react-moment';


const MOVIE_DETAILS_URL = 'https://www.themoviedb.org/movie/';
const MOVIE_POSTER_URL = 'https://image.tmdb.org/t/p/w342';

const movie = (props) => {

    return(
        <div className="container-fluid">

          <div className="row movie_list">
              {props.moviesList.map(movie => {
                return (
                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-2" key={movie.id}>
                    <div className="card">
                      <img 
                          className="card-img-top"
                          src= {MOVIE_POSTER_URL + movie.poster_path} 
                          alt={movie.title} />
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <p>
                            <i className="fa fa-calendar" aria-hidden="true"></i> <Moment format="MM/DD/YYYY">
                              {movie.release_date}
                            </Moment></p>
                          </div>
                          <div className="col">
                            <p className="rating">{movie.vote_average} <i className="fa fa-star fa-6" aria-hidden="true"></i></p>
                          </div>
                        </div>
                      </div>
                      <div className="genres">
                        <div className="row">
                          <div className="col">
                            <a title={props.getGenreName(movie.genre_ids)} className="genre">{props.trimGenre(props.getGenreName(movie.genre_ids))}</a>
                          </div>
                        </div>
                      </div>
                      <div className="overview">
                        <div className="row">
                          <div className="col">
                            <a 
                              href={MOVIE_DETAILS_URL + movie.id}
                              target='_blank'
                              rel="noopener noreferrer">Overview</a>
                          </div>
                        </div>
                      </div>
                  </div>
                  </div>
                );

              })}
          </div>
        </div>
    );
}

export default movie;