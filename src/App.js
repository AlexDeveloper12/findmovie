import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieItem from './components/MovieItem';

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
        console.log(response.data);
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
    updatedMovies = updatedMovies.filter(movie => movie.Title.toLowerCase().includes(search.toLowerCase()));
    setMovies(updatedMovies);
    setShowMovies(true);
  }

  const addToFavourite = (movie) => {

    if (movie !== null && movie !== undefined) {
      let movieObject = { movie };
      movieObject["isFavourite"] = "1";
      localStorage.setItem(`${movie.Title}-movie`, JSON.stringify(movieObject));
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
                <MovieItem
                  movie={value}
                  showModal={showModal}
                  toggleModal={toggleModal}
                  toggleFavourite={toggleFavourite}
                  addToFavourite={addToFavourite}
                />
            )

          }) : null
        }
      </div>


    </div>
  );
}

export default App;
