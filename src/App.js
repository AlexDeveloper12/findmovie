import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import MovieItem from './components/MovieItem';
import { movieContext } from './components/Context/movieContext';

function App() {

  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [showMovies, setShowMovies] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [favourite, setFavourite] = useState(false);
  const [favouritesList, setFavouritesList] = useState(false);


  useEffect(() => {
    axios.get('movies.json')
      .then(response => {
        if (response !== null && response !== undefined) {
          setMovies(response.data);
        }
      })
  }, []);

  const handleSearch = (searchText) => {
    console.log(searchText);
    setSearch(searchText);
    setShowMovies(false);
  }

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  const toggleFavourite = () => {
    setFavourite(!favourite);
  }

  const searchForMovie = () => {
    //function to filter the movies via what the user searched for
    var updatedMovies = [...movies];
    console.log(updatedMovies);
    updatedMovies = updatedMovies.filter(movie => movie.Title.toLowerCase().includes(search.toLowerCase()));
    setMovies(updatedMovies);
    //setShowMovies(true);
  }

  const addToFavourite = (movie) => {
    console.log(movie);
    if (movie !== null && movie !== undefined) {
      movie["isFavourite"] = "1";
      localStorage.setItem(`${movie.Title}-movie`, JSON.stringify(movie));
      console.log(movie);
    }

  }

  return (
    <div className="App">
      <Search
        searchValue={search}
        handleSearch={handleSearch}
        searchMovie={searchForMovie}
      />

      <div className="movie-container">
        {showMovies === true && movies.length > 0 ?
          movies.map((value, index) => {
            return (
              <movieContext.Provider value={{movie:value,togModal:toggleModal,addFav:addToFavourite}}>
              <MovieItem
                showModal={showModal}
                toggleFavourite={toggleFavourite}
                isFavourite={movies["isFavourite"]}
              />
              </movieContext.Provider>
            )

          }) : null
        }
      </div>


    </div>
  );
}

export default App;
