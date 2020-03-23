import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { useParams, NavLink, useRouteMatch } from "react-router-dom";

import axios from "axios";

const MovieList = props => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies")
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };

    getMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <NavLink to={`/movies/${movie.id}`} key={movie.id}>
          <MovieCard movie={movie} />
        </NavLink>
      ))}
    </div>
  );
};

export default MovieList;
