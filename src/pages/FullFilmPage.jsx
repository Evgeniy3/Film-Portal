import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSearchOneFilmQuery } from "../store/filmSlice/film.api";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addFavFilm, removeFavFilm } from "../store/favFilmSlice/favFilmSlice";

const FullFilm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { id } = useParams();
  const { data, isError } = useSearchOneFilmQuery(id);
  const { favFilms } = useSelector((state) => state.favFilm);
  const [isFav, setIsFav] = useState(
    favFilms.some((obj) => obj?.imdbID === data?.imdbID)
  );

  const isAuth = JSON.parse(localStorage.getItem('admin'))

  const addFilmBtn = () => {
      dispatch(addFavFilm(data));
      setIsFav(true);
  };
  const removeFilmBtn = () => {
    dispatch(removeFavFilm(data?.imdbID));
    setIsFav(false);
  };

  const backBtn = () => {
    navigate('/registration')
  };

  if (!data) {
    return <Loader />;
  }
  return (
    <>
      {isError && (
        <div className="fullfilm-error">
          <h2>Произошла ошибка 😕</h2>
          <p>
            К сожалению, не удалось получить фильмы. Попробуйте повторить
            попытку позже.
          </p>
        </div>
      )}
      <div className="container fullfilm">
        <img className="fullfilm-img" src={data.Poster} alt="Poster" />
        <div>
          <p>
            Название: <span>{data.Title}</span>
          </p>
          <p>
            Актеры: <span>{data.Actors}</span>
          </p>
          <p>
            Награды: <span>{data.Awards}</span>
          </p>
          <p>
            Кассовые: <span>{data.BoxOffice}</span>
          </p>
          <p>
            Страны: <span>{data.Country}</span>
          </p>
          <p>
            Директор: <span>{data.Director}</span>
          </p>
          <p>
            Жанр: <span>{data.Genre}</span>
          </p>
          <p>
            Языки: <span>{data.Language}</span>
          </p>
          <p>
            Рейтинг: <span>{data.Rated}</span>
          </p>
          <p>
            Дата выпуска: <span>{data.Released}</span>
          </p>
          <p>
            Длительность: <span>{data.Runtime}</span>
          </p>
          <p>
            Тип: <span>{data.Type}</span>
          </p>
          <p>
            Писатель: <span>{data.Writer}</span>
          </p>
          <p>
            imdbID: <span>{data.imdbID}</span>
          </p>
          <p>
            imdbID рейтинг: <span>{data.imdbRating}</span>
          </p>
          <p>
            imdbID голоса: <span>{data.imdbVotes}</span>
          </p>
          <p>
            Сюжет: <span>{data.Plot}</span>
          </p>
          <div className="fullfilm-btns">
            {!isFav && (
              <button
                onClick={isAuth ? addFilmBtn : backBtn}
                className="button button--registration"
              >
                <span>Добавить в избранное</span>
              </button>
            )}

            {isFav && (
              <button
                onClick={isAuth ? removeFilmBtn : backBtn}
                className="button button--registration"
              >
                <span>Удалить из избранного</span>
              </button>
            )}
            <button onClick={() => navigate(-1)} className="button button--registration">
              <span>Назад</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullFilm;
