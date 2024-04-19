import React from "react";
import { useSelector } from "react-redux";
import FilmBlock from "../components/FilmBlock";
import PaginationFav from "../components/PaginationFav";

const FavFilmPage = () => {
  const { favFilms, pageValue} = useSelector((state) => state.favFilm);
  
  const lastIndex = pageValue * 10
  const firstIndex = lastIndex - 10
  const currentFilms = favFilms.slice(firstIndex,lastIndex)

  return (
    <div className="container">
      <h2 className="content__title">Избранные фильмы</h2>
      <div
        className={favFilms.length > 0 ? "content__items" : "content__epmty"}
      >
        {favFilms.length > 0 ? (
          currentFilms.map((obj) => <FilmBlock key={obj.imdbID} {...obj} />)
        ) : (
          <p>У вас нет избранных фильмов!</p>
        )}
      </div>
      {currentFilms.length > 0 && <PaginationFav totalCount={favFilms.length}/>}
    </div>
  );
};

export default FavFilmPage;
