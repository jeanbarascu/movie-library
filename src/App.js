import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';

//Import custom components
import Header from './Header/Header';
import Movies from './Movie/Movie';
import Footer from './Footer/Footer';

const API_KEY = '04339464a4f6bf1ed1e3ecf0b14b5e33';
const MY_MOVIES_LIST_ID = '45669';

const BASE_URL_MOVIES = 'https://api.themoviedb.org/3/list/';

const BASE_URL_GENRES = 'https://api.themoviedb.org/3/genre/movie/list';

class App extends Component {

  constructor(props){
    
    super(props);

    // set the initial state of the component
    this.state = {
      movies: [],
      numberOfMovies: 0,
      genres: [],
      searchByTitle: '',
      filterByGenre: 0
    };

  }

  componentDidMount() {

    // Make a request to TMDB API to retrieve my movie list
    Axios.get(BASE_URL_MOVIES + MY_MOVIES_LIST_ID + '?api_key=' + API_KEY)
    .then(response => {
      this.setState({movies: response.data.items, numberOfMovies: response.data.items.length});
    })
    .catch(error => {
      console.log(error);
    });

    // Make a request to TMDB API to retrieve all movie genres list
    Axios.get(BASE_URL_GENRES + '?api_key=' + API_KEY)
    .then(response => {
      this.setState({genres: response.data.genres});
    })
    .catch(error => {
      console.log(error);
    });
    
  }

  searchInputHandler = (event) => {
    this.setState({ searchByTitle: event.target.value.trim().toLowerCase() });
  };

  filterByGenreHandler = (event) => {
    this.setState({filterByGenre: event.target.value});
  }

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

  truncateText = (text, length) => {
    if(text.length > length){
      return text.substring(0, length) + ' ...';
    } else {
      return text;
    }
  };

  render() {

    let movieResults = [];

    if(parseInt(this.state.filterByGenre, 0) === 0) {
      
      movieResults =
        this.state.movies
        .filter(movie => {
          return movie.title.trim().toLowerCase().indexOf(this.state.searchByTitle) !== -1; 
        });

    }
    
    if(parseInt(this.state.filterByGenre, 0) !== 0) {

      let movieResultsAfterFilter;

      movieResultsAfterFilter = 
        this.state.movies
        .filter(movie => {
          let hasGenre = false;
          movie.genre_ids.forEach(genre => {
            if(genre === parseInt(this.state.filterByGenre, 0)){
              hasGenre = true;
            }
          });
          return hasGenre;
        });

        movieResults =
          movieResultsAfterFilter
          .filter(movie => {
            return movie.title.trim().toLowerCase().indexOf(this.state.searchByTitle) !== -1; 
          });

    }

    return (
      <div className="App">
        
        <Header
          genresList={this.state.genres}
          searchInput={this.searchInputHandler}
          filterInput={this.filterByGenreHandler}
          numberOfMovies={this.state.numberOfMovies} />

        <Movies
            moviesList={movieResults}
            getGenreName={this.getGenreName}
            truncate={this.truncateText} />

        <Footer />

      </div>
    );
  }
}

export default App;
