import React from "react";
import { Link } from "react-router-dom";
import { IFilm } from "../store/filmSlice/types";

const FilmBlock: React.FC<IFilm> = React.memo(({Title, Poster, imdbID, Type, Year}) => {
  return (
    <Link to={`/film/${imdbID}`}>
      <div className="film-block">
        {Poster !== "N/A" ? <img className="film-block__image" src={Poster} alt="Poster" /> : <div className="film-block__imgempty"><p>Постера нет <br/> 😕</p></div>}
        <div>
          <h5 className="film-block__title">{Title}</h5>
          <p >Год: {Year}</p>
          <p >Тип: {Type}</p>
          <p >imdbID: {imdbID}</p>
        </div>
      </div>
    </Link>
  );
});

export default FilmBlock;
