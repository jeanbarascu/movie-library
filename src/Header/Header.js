import React from 'react';
import Filter from './Filter/Filter';
import Search from './Search/Search';

const TMDB_LOGO = 'https://www.themoviedb.org/static_cache/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png';

const TMDB_WEBSITE= 'https://www.themoviedb.org/';

const header = (props) => {

    return (
        <header className="row fixed-top">
          
          <div className="col-sm-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
            <a href={TMDB_WEBSITE} target="_blank" rel="noopener noreferrer">
              <img className="tmdb_logo" src={TMDB_LOGO} alt="The Movie Database Logo" />
            </a>
          </div>

          <Filter 
            genresList={props.genresList}
            changed={props.filterInput} />

          <Search
            changed={props.searchInput} />

          <div className="col-sm-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <p className="total_movies">{props.numberOfMovies} movies in your list</p>
          </div>

        </header>
    );
}

export default header;