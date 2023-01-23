import React from "react";
import MovieRating from "../MovieRating";
import "../../styles/MovieDetails.css";

function MovieDetails({ movie,toggleModal }) {


    const renderStarRating = () => {

        const ratingFloor = Math.floor(movie.imdbRating);
        let rating = [];
        console.log(ratingFloor);

        if (ratingFloor > 0) {
            for (var i = 1; i <= ratingFloor; i++) {
                rating.push(<MovieRating />);
            }
        }
        return rating;
    }

    return (
        <>
            <table className="table-movie-details">
                <tbody>
                    <tr>
                        <td>Plot: </td>
                        <td>{movie.Plot}</td>
                    </tr>
                    <tr>
                        <td>
                            Genre:
                        </td>
                        <td>{movie.Genre}</td>
                    </tr>
                    <tr>
                        <td>Runtime: </td>
                        <td>{movie.Runtime} </td>
                    </tr>
                    <tr>
                        <td>Rating</td>
                        <td>{movie.Rated}</td>
                    </tr>
                    <tr>
                        <td>Release Date:</td>
                        <td>{movie.Released}</td>
                    </tr>
                    <tr>
                        <td>Rating:</td>
                        <td>{renderStarRating()}</td>
                    </tr>
                    <tr>
                        <td>Director</td>
                        <td>{movie.Director}</td>
                    </tr>
                    <tr>
                        <td>
                            Writer
                        </td>
                        <td>
                            {movie.Writer}
                        </td>
                    </tr>

                </tbody>
            </table>
            <div className="btn-bottom-container">
                <button type="button" className="btn-bottom btn" onClick={toggleModal}>Close</button>
            </div>
        </>

    )

}

export default MovieDetails;