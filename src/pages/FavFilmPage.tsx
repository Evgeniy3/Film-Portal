import React from "react";
import { useSelector } from "react-redux";
import FilmBlock from "../components/FilmBlock";
import PaginationFav from "../components/PaginationFav";
import { IFullFilm } from "../store/filmSlice/types";
import { favFilmsSelect } from "../store/favFilmSlice/favFilmSlice";

const FavFilmPage: React.FC = () => {
  const { favFilms, pageValue} = useSelector(favFilmsSelect);
  
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
          currentFilms.map((obj: IFullFilm) => <FilmBlock key={obj.imdbID} {...obj} />)
        ) : (
          <p>У вас нет избранных фильмов!</p>
        )}
      </div>
      {currentFilms.length > 0 && <PaginationFav totalCount={favFilms.length}/>}
    </div>
  );
};

export default FavFilmPage;
