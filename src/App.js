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

  render() {
    return (
      <div className="App">
        
        <Header />

        <Movies />

        <Footer />

      </div>
    );
  }
}

export default App;
