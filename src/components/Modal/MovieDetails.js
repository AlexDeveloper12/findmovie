import React,{useContext} from "react";
import MovieRating from "../MovieRating";
import "../../styles/MovieDetails.css";
import { movieContext } from "../Context/movieContext";

function MovieDetails({entertainmentValue}) {

    // const {movie,togModal} = useContext(movieContext);
    const renderStarRating = () => {

        const ratingFloor = Math.floor(entertainmentValue.imdbRating);
        let rating = [];

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
                        <td>{entertainmentValue.Plot}</td>
                    </tr>
                    <tr>
                        <td>
                            Genre:
                        </td>
                        <td>{entertainmentValue.Genre}</td>
                    </tr>
                    <tr>
                        <td>Runtime: </td>
                        <td>{entertainmentValue.Runtime} </td>
                    </tr>
                    <tr>
                        <td>Rating</td>
                        <td>{entertainmentValue.Rated}</td>
                    </tr>
                    <tr>
                        <td>Release Date:</td>
                        <td>{entertainmentValue.Released}</td>
                    </tr>
                    <tr>
                        <td>Rating:</td>
                        <td>{renderStarRating()}</td>
                    </tr>
                    <tr>
                        <td>Director:</td>
                        <td>{entertainmentValue.Director}</td>
                    </tr>
                    <tr>
                        <td>
                            Writer:
                        </td>
                        <td>
                            {entertainmentValue.Writer}
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="btn-bottom-container">
                {/* <button type="button" className="btn-bottom btn btn-ok" onClick={()=>togModal(entertainmentValue)}>Close</button> */}
            </div>
        </>
    )
}

export default MovieDetails;