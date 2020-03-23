import React from "react";
import { NavLink } from "react-router-dom";

const SavedList = props => {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink
          to={`/movies/${movie.id}`}
          className="saved-movie"
          key={movie.id}
        >
          {movie.title}
        </NavLink>
      ))}
      <div className="home-button">
        <NavLink to="/">Home</NavLink>
      </div>
    </div>
  );
};

export default SavedList;
