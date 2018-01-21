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
      genres: GenresTMDB.genres,
      searchByTitle: '',
      filterByGenre: 0
    };

  }

  searchInputHandler = (event) => {
    this.setState({ searchByTitle: event.target.value.trim().toLowerCase() });
  };

  getGenreName = (ids = []) => {

    let genre_name = [];

    this.state.genres.forEach(genre => {
      ids.forEach(id => {
        if(id === genre.id){
          genre_name.push(genre.name);
        }
      });
    });

    return genre_name.join(', ');

  };

  render() {

    this.getGenreName();

    let movieResults;

    if(this.state.filterByGenre === 0) {
      movieResults =
        this.state.movies
        .filter(movie => {
          return (movie.title.trim().toLowerCase().indexOf(this.state.searchByTitle) !== -1); 
        });
    }

    return (
      <div className="App">
        
        <Header
          genresList={this.state.genres}
          searchInput={this.searchInputHandler} />

        <Movies
            moviesList={movieResults}
            getGenreName={this.getGenreName} />

        <Footer />

      </div>
    );
  }
}

export default App;
