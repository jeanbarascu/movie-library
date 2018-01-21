import React, { Component } from 'react';
import './App.css';

const TMDB_LOGO = 'https://www.themoviedb.org/static_cache/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png';

const TMDB_WEBSITE= 'https://www.themoviedb.org/';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <header className="row fixed-top">
          
          <div className="col-sm-12 col-md-3 col-lg-2 col-xl-2">
            <a href={TMDB_WEBSITE} target="_blank" rel="noopener noreferrer">
              <img className="tmdb_logo" src={TMDB_LOGO} alt="The Movie Database Logo" />
            </a>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-3 col-xl-2">
            <select className='form-control' id='selectBox'>
                <option value='0'>Genres</option>            
                <option value='1'>Drama</option>            
                <option value='2'>Action</option>            
            </select>
          </div>

          <div className="col-sm-12 col-md-5 col-lg-3 col-xl-2">
            <input className="form-control" 
                  id="searchInput"
                  type="text" 
                  placeholder="Search by title"
                  autoComplete="off"
                  autoFocus="true" />
          </div>

        </header>

        <div className="container">
          {/* Movie list goes here! */}
        </div>

      </div>
    );
  }
}

export default App;
