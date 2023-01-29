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
import MovieModal from './components/Modal/MovieModal';
import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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
  const [clickedEntertainment, setClickedEntertainment] = useState("");

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

  const toggleModal = (entertainmentID) => {
    if (entertainmentID !== "") {
      setClickedEntertainment(entertainmentID);
    }
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
    console.log(movie);
    if (movie !== null && movie !== undefined) {
      movie.isFavourite = "1";
      movie.Title.trim();
      localStorage.setItem(`${movie.ID}`, JSON.stringify(movie));
      toggleModal("");
    }

  }

  const filterMoviesByCategory = (categoryChosen) => {
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
      getAllFavourites();
    }
    setToggleDeleteModal(!toggleDeleteModalValue);
  }

  return (
    <div className="App">

      <Tabs>
        <TabList>
          <Tab>Home</Tab>
          <Tab>Favourites</Tab>
        </TabList>

        <TabPanel>

          <Search
            searchValue={search}
            handleSearch={handleSearch}
            searchMovie={searchForMovie}
          />

          {
            showModal ?

              <MovieModal
                showModal={showModal}
                entertainmentValue={clickedEntertainment}
                togModal={toggleModal}
                addFav={addToFavourite}
              /> : null
          }

          <div className="genre-container">
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
              movieCategoryFilter.map((value) => {
                return (
                  <movieContext.Provider value={{ movie: value, togModal: toggleModal, addFav: addToFavourite }}>
                    <MovieItem
                      showModal={showModal}
                      toggleFavourite={toggleFavourite}
                      isFavourite={movieCategoryFilter["isFavourite"]}
                      togModal={toggleModal}
                      movie={value}
                    />
                  </movieContext.Provider>
                )

              }) : null
            }
          </div>


        </TabPanel>

        <TabPanel>
          {
            favouritesList !== null && favouritesList.length > 0 ?

              <table className="favourite-container">
                <thead>
                  <tr>
                    <th colSpan={5}>Favourites list</th>
                  </tr>
                  <tr>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Rating</th>
                    <th>Awards</th>
                    <th>Action(s)</th>
                  </tr>
                </thead>
                <tbody>

                  {
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
                  }
                </tbody>
              </table>
              : <tr><td><span className="unbounded-font">There are currently no values in the Favourites list.</span> </td></tr>



          }


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
        </TabPanel>

      </Tabs>



    </div>
  );
}

export default App;
