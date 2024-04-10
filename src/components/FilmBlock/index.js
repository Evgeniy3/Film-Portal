import React, { useState } from "react";
import { Link } from "react-router-dom";
import testImg from "../../assets/img/test.jpg";

const FilmBlock = ({Title, Poster, imdbID, Type, Year}) => {
  // const dispath = useDispatch();

  return (
    <Link to={`/film/${imdbID}`}>
      <div className="film-block">
        <img className="film-block__image" src={Poster} alt="Film" />
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
