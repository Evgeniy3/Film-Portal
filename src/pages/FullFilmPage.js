import React from "react";
import { Link, useParams} from "react-router-dom";
import { useSearchOneFilmQuery } from "../store/filmSlice/film.api";
import Loader from "../components/Loader";

const FullFilm = () => {
  const { id } = useParams();
  const { data, isError } = useSearchOneFilmQuery(id);

  if (!data) {
    return <Loader />;
  }
  return (
    <>
      {isError && 
      <div className="fullfilm-error">
          <h2>Произошла ошибка 😕</h2>
          <p>К сожалению, не удалось получить фильмы. Попробуйте повторить попытку позже.</p>
      </div>}
      <div className="container fullfilm">
        <img className="fullfilm-img" src={data?.Poster} alt="Poster" />
        <div>
          <p>
            Название: <span>{data?.Title}</span>
          </p>
          <p>
            Актеры: <span>{data?.Actors}</span>
          </p>
          <p>
            Награды: <span>{data?.Awards}</span>
          </p>
          <p>
            Кассовые: <span>{data?.BoxOffice}</span>
          </p>
          <p>
            Страны: <span>{data?.Country}</span>
          </p>
          <p>
            Директор: <span>{data?.Director}</span>
          </p>
          <p>
            Жанр: <span>{data?.Genre}</span>
          </p>
          <p>
            Языки: <span>{data?.Language}</span>
          </p>
          <p>
            Рейтинг: <span>{data?.Rated}</span>
          </p>
          <p>
            Дата выпуска: <span>{data?.Released}</span>
          </p>
          <p>
            Длительность: <span>{data?.Runtime}</span>
          </p>
          <p>
            Тип: <span>{data?.Type}</span>
          </p>
          <p>
            Писатель: <span>{data?.Writer}</span>
          </p>
          <p>
            imdbID: <span>{data?.imdbID}</span>
          </p>
          <p>
            imdbID рейтинг: <span>{data?.imdbRating}</span>
          </p>
          <p>
            imdbID голоса: <span>{data?.imdbVotes}</span>
          </p>
          <p>
            Сюжет: <span>{data?.Plot}</span>
          </p>
          <div className="fullfilm-btns">
            <button className="button button--registration">
              <span>Добавить в избранное</span>
            </button>
            <Link to="/">
              <button className="button button--registration">
                <span>Назад</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullFilm;