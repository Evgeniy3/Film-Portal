import React from "react";
import FilmBlock from "../components/FilmBlock";
import { useSearchFilmsQuery } from "../store/filmSlice/film.api";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import SortType from "../components/SortType";
import SortYear from "../components/SortYear";
import { RootState } from "../store";

const Home: React.FC = () => {
  const { searchValue, pageValue, sortType, sortYear } = useSelector(
    (state: RootState) => state.filter
  );
  const { isError, data } = useSearchFilmsQuery({
    searchValue,
    pageValue,
    sortType,
    sortYear,
  });
  if (!data) {
    return <Loader />;
  }
  return (
    <div className="container">
      <div className="content__top">
        <SortType value={sortType} />
        <SortYear value={sortYear} />
      </div>
      <h2 className="content__title">Все фильмы</h2>
      {isError ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>
            К сожалению, не удалось получить фильмы. Попробуйте повторить
            попытку позже.
          </p>
        </div>
      ) : (
        <div className={data.Response === "True" ? "content__items" : "content__epmty"}>
          {data.Response === "True" ? (
            data.Search.map((obj) => <FilmBlock key={obj.imdbID} {...obj} />)
            ) : (
            <p>Фильмы не найдены!</p>
          )}
        </div>
      )}
      {data.Response === "True" ? (
        <Pagination totalResult={data.totalResults} />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Home;
