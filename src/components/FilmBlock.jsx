import React from "react";
import { Link } from "react-router-dom";

const FilmBlock = ({Title, Poster, imdbID, Type, Year}) => {
  return (
    <Link to={`/film/${imdbID}`}>
      <div className="film-block">
        <img className="film-block__image" src={Poster} alt="Poster" />
        <div>
          <h5 className="film-block__title">{Title}</h5>
          <p >Год: {Year}</p>
          <p >Тип: {Type}</p>
          <p >imdbID: {imdbID}</p>
        </div>
      </div>
    </Link>
  );
};

export default FilmBlock;
