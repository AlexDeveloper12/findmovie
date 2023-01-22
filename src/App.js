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

  const toggleModal = () =>{
    setShowModal(!showModal);
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
              />
          )

        }) : null
      }

    </div>
  );
}

export default App;
