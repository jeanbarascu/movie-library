import React from 'react';

const MOVIE_POSTER_URL = 'http://image.tmdb.org/t/p/w342';

const movie = (props) => {
    return(
        <div className="container-fluid">
          <div className="row">
              {props.moviesList.map(movie => {
                return (
                  <div className="col-sm-6 col-md-3 col-lg-2" key={movie.id}>
                    <div className="card">
                      <img 
                          className="card-img-top" 
                          src= {MOVIE_POSTER_URL + movie.poster_path} 
                          alt={movie.title} />
                      <div className="card-body">
                          
                          <div className="row">
                            <div className="col">
                              <p className="card-title">{movie.title}</p>
                            </div>
                          </div>

                          <hr className="split_info" />

                          <div className="row">
                            <div className="col">
                              <p className="genre">Genre</p>
                            </div>
                          </div>

                          <hr className="split_info" />
                          
                          <div className="row">
                            <div className="col">
                              <p className="relese_date">
                                <i className="fa fa-calendar" aria-hidden="true"></i> {movie.release_date}</p>
                            </div>
                            <div className="col">
                              <a href='#' className="btn btn-success btn-sm overview">Overview</a>
                            </div>
                          </div>

                          <hr className="split_info" />

                          <div className="row">
                            <div className="col">
                              <p className="raiting">{movie.vote_average} <i className="fa fa-star fa-6" aria-hidden="true"></i></p>
                            </div>
                            <div className="col">
                              <p className="votes">Votes: {movie.vote_count}</p>
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