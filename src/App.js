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
import ChosenCategory from './components/ChosenCategory';
import DeleteFavouriteModal from './components/Modal/DeleteFavouriteModal';

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
  const [favListMovieIDChosen, setfavListMovieIDChosen] = useState("");

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
    
    updatedMovies = updatedMovies.filter(movie => movie.Title.toLowerCase().includes(search.toLowerCase()));
    setMovieCategoryFilter(updatedMovies);

  }

  const addToFavourite = (movie) => {
    
    if (movie !== null && movie !== undefined) {
      movie["isFavourite"] = "1";
      movie.Title.trim();
      localStorage.setItem(`${movie.ID}`, JSON.stringify(movie));
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
        favList.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
      }

      setFavouritesList(favList);
    }
  }

  const removeFromFavourites = (entertainmentID) => {

    var updatedFavourites = [...favouritesList];

    //finding if there is a value in the array that has an id equal to one passed in
    const objWithId = updatedFavourites.findIndex((obj) => obj.ID === entertainmentID);

    //if so we splice the array
    if (objWithId > -1) {
      updatedFavourites.splice(updatedFavourites, 1);
      localStorage.removeItem(entertainmentID);
      //remove from local storage with key which is the movie/series name
      
    }
    //set favourites list and close modal without passing in movie id
    setFavouritesList(updatedFavourites);
    toggleDelMovModal(-1);
  }

  const toggleDelMovModal = (movieID) => {
    if (movieID > -1) {
      setfavListMovieIDChosen(movieID);
    }
    setToggleDeleteModal(!toggleDeleteModalValue);
  }

  return (
    <div className="App">
      <Search
        searchValue={search}
        handleSearch={handleSearch}
        searchMovie={searchForMovie}
      />

      <table className="favourite-container">
        <thead>
          <tr>
            <th colSpan={2}>Favourites list</th>
          </tr>


          <tr>
            <th>Movie/Series</th>
            <th>Action(s)</th>
          </tr>
        </thead>
        <tbody>
          {
            favouritesList.length > 0 && favouritesList !== null ?
              favouritesList.map((value, index) => {
                return (

                  <Favourites
                    favouriteItem={value}
                    deleteMovie={removeFromFavourites}
                    toggleDeleteModal={toggleDelMovModal}
                    isModalOpen={toggleDeleteModalValue}
                  />
                )
              })
              : <tr> <td> There are currently no values in the Favourites list.</td></tr>

          }
        </tbody>
      </table>

      {
        toggleDeleteModalValue ?

          <DeleteFavouriteModal
            movieID={favListMovieIDChosen}
            isModalOpen={toggleDeleteModalValue}
            toggleModal={toggleDelMovModal}
            deleteMovie={removeFromFavourites}
          />

          : null
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

      <ChosenCategory
        chosenCategory={chosenCategory}
      />

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
