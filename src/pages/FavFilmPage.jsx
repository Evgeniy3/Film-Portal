import React from "react";
import { useSelector } from "react-redux";
import FilmBlock from "../components/FilmBlock";

const FavFilmPage = () => {
  const { favFilms } = useSelector((state) => state.favFilm);

  return (
    <div className="container">
      <h2 className="content__title">Избранные фильмы</h2>
      <div
        className={favFilms.length > 0 ? "content__items" : "content__epmty"}
      >
        {favFilms.length > 0 ? (
          favFilms.map((obj) => <FilmBlock key={obj.imdbID} {...obj} />)
        ) : (
          <p>У вас нет избранных фильмов!</p>
        )}
      </div>
    </div>
  );
};

export default FavFilmPage;
