import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import MovieItem from './components/MovieItem';
import { movieContext } from './components/Context/movieContext';
import Genres from './components/Genres';
import { movieGenreList } from './MovieGenreList';
import Favourites from './components/Favourites';

function App() {

  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [showMovies, setShowMovies] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [favourite, setFavourite] = useState(false);
  const [favouritesList, setFavouritesList] = useState([]);
  const [movieCategoryFilter, setMovieCategoryFilter] = useState([]);
  const [chosenCategory, setChosenCategory] = useState("");
  const [toggleDeleteModalValue, setToggleDeleteModal] = useState(false);

  useEffect(() => {
    GetMovies();
    getAllFavourites();
  }, []);

  const GetMovies = () => {
    axios.get('movies.json')
      .then(response => {
        if (response !== null && response !== undefined) {
          setMovies(response.data);
          setMovieCategoryFilter(response.data);
        }
      })

  }

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
    var updatedMovies = [...movieCategoryFilter];
    console.log(updatedMovies);
    updatedMovies = updatedMovies.filter(movie => movie.Title.toLowerCase().includes(search.toLowerCase()));
    setMovieCategoryFilter(updatedMovies);

  }

  const addToFavourite = (movie) => {
    console.log(movie);
    if (movie !== null && movie !== undefined) {
      movie["isFavourite"] = "1";
      localStorage.setItem(`${movie.Title}-movie`, JSON.stringify(movie));
    }

  }

  const filterMoviesByCategory = (categoryChosen) => {
    console.log(categoryChosen);
    setChosenCategory(categoryChosen);

    var filteredMovies = [];

    if (categoryChosen === "All") {
      filteredMovies = movies;
    } else {
      filteredMovies = movies.filter(movie => {
        return movie.Genre.includes(categoryChosen);
      });
    }

    setMovieCategoryFilter(filteredMovies);
  }

  const getAllFavourites = () => {
    const favList = [];
    setFavouritesList([]);
    if (localStorage.length > 0) {

      for (var i = 0; i < localStorage.length; i++) {
        // console.log(JSON.parse(localStorage.getItem(localStorage.key(i))))
        favList.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
      }

      setFavouritesList(favList);
    }
  }

  const removeFromFavourites = (movieID) => {

  }

  const toggleDelMovModal = () => {
    setToggleDeleteModal(!toggleDeleteModalValue);
  }

  return (
    <div className="App">
      <Search
        searchValue={search}
        handleSearch={handleSearch}
        searchMovie={searchForMovie}
      />

      {

        favouritesList.length > 0 && favouritesList !== null ?

          favouritesList.map((value) => {
            return (

              <Favourites
                favouriteItem={value}
                deleteMovie={removeFromFavourites}
                toggleDeleteModal={toggleDelMovModal}
                isModalOpen={toggleDeleteModalValue}
              />
            )
          })
          : <div> There are currently no values in the Favourites list.</div>
      }



      <div style={{ marginTop: '2%' }}>

        {
          movieGenreList !== null ?

            movieGenreList.map((value) => {
              return (
                <Genres
                  genreItem={value}
                  handleFilter={filterMoviesByCategory}
                />
              )
            }) : null
        }

      </div>

      <div className="chosen-category-container">
        {
          chosenCategory !== "" ?
            <span className="unbounded-font" style={{ marginLeft: '10px' }}>Category: {chosenCategory}</span>
            : null
        }
      </div>

      <div className="movie-container">
        {movieCategoryFilter !== null && movieCategoryFilter.length > 0 ?
          movieCategoryFilter.map((value, index) => {
            return (
              <movieContext.Provider value={{ movie: value, togModal: toggleModal, addFav: addToFavourite }}>
                <MovieItem
                  showModal={showModal}
                  toggleFavourite={toggleFavourite}
                  isFavourite={movieCategoryFilter["isFavourite"]}
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
