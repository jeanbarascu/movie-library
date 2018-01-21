import React from 'react';

const movie = () => {
    return(
        <div className="container-fluid">
          <div className="col-sm-6 col-md-3 col-lg-2">
              <div className="card">
                  <img 
                      className="card-img-top" 
                      src='https://image.tmdb.org/t/p/w185_and_h278_bestv2/gri0DDxsERr6B2sOR1fGLxLpSLx.jpg' 
                      alt='img' />
                  <div className="card-body">
                      
                      <div className="row">
                        <div className="col">
                          <p className="card-title">Title</p>
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
                            <i className="fa fa-calendar" aria-hidden="true"></i> Release Date</p>
                        </div>
                        <div className="col">
                          <a href='#' className="btn btn-success btn-sm overview">Overview</a>
                        </div>
                      </div>

                      <hr className="split_info" />

                      <div className="row">
                        <div className="col">
                          <p className="raiting">Rating <i className="fa fa-star fa-6" aria-hidden="true"></i></p>
                        </div>
                        <div className="col">
                          <p className="votes">Votes</p>
                        </div>
                      </div>

                  </div>
              </div>
          </div>
        </div>
    );
}

export default movie;