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
  const [favourite,setFavourite] = useState(false);
  const [favouritesList,setFavouritesList] = useState(false);

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

  const toggleFavourite = () =>{
    setFavourite(!favourite);
  }

  const searchForMovie = () => {
    //function to filter the movies via what the user searched for
    var updatedMovies = [...movies];
    console.log('search');
    console.log(search);
    updatedMovies = updatedMovies.filter(movie => movie.Title.toLowerCase().includes(search.toLowerCase()));
    console.log(updatedMovies);
    setMovies(updatedMovies);
    setShowMovies(true);
  }

  return (
    <div className="App">
      <Search
        searchValue={search}
        handleSearch={handleSearch}
        searchMovie={searchForMovie}
      />

      {showMovies ?
        movies.map((value, index) => {
          return (
            <MovieItem
              movie={value}
              showModal={showModal}
              toggleModal={toggleModal}
              toggleFavourite={toggleFavourite}
            />
          )

        }) : <div>There are no movies in the database that match that title. We apologise for this</div>
      }

    </div>
  );
}

export default App;
