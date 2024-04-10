import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSearchOneFilmQuery } from "../store/filmSlice/film.api";

const FullFilm = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useSearchOneFilmQuery(id);
  console.log("one", isLoading);
  // if (!film) {
  //   return <>Загрузка...</>;
  // }

  return (
    <div className="container fullfilm">
      <img className="fullfilm-img" src={data.Poster} alt="" />
      <div>
        <p>Название: <span>{data.Title}</span></p>
        <p>Актеры: <span>{data.Actors}</span></p>
        <p>Награды: <span>{data.Awards}</span></p>
        <p>Кассовые: <span>{data.BoxOffice}</span></p>
        <p>Страны: <span>{data.Country}</span></p>
        <p>Директор: <span>{data.Director}</span></p>
        <p>Жанр: <span>{data.Genre}</span></p>
        <p>Языки: <span>{data.Language}</span></p>
        <p>Рейтинг: <span>{data.Rated}</span></p>
        <p>Дата выпуска: <span>{data.Released}</span></p>
        <p>Длительность: <span>{data.Runtime}</span></p>
        <p>Тип: <span>{data.Type}</span></p>
        <p>Писатель: <span>{data.Writer}</span></p>
        <p>imdbID: <span>{data.imdbID}</span></p>
        <p>imdbID рейтинг: <span>{data.imdbRating}</span></p>
        <p>imdbID голоса: <span>{data.imdbVotes}</span></p>
        <p>Сюжет: <span>{data.Plot}</span></p>
      </div>
    </div>
  );
};

export default FullFilm;
{/* <Link to="/">
  <button className="button button--outline button--add fullfilm-btn">
    <span>Назад</span>
  </button>
</Link>; */}
