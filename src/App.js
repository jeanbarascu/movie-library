import React, { Component } from 'react';
import './App.css';

//Import movies list
import MoviesTMDB from './DataSource/movies.json';
import GenresTMDB from './DataSource/genres.json';

//Import custom components
import Header from './Header/Header';
import Movies from './Movie/Movie';
import Footer from './Footer/Footer';

class App extends Component {

  constructor(props){
    
    super(props);
    
    this.state = {
      movies: MoviesTMDB.results,
      genres: GenresTMDB.genres
    };

  }

  render() {
    return (
      <div className="App">
        
        <Header
          genresList={this.state.genres} />

        <Movies
          moviesList={this.state.movies} />

        <Footer />

      </div>
    );
  }
}

export default App;
