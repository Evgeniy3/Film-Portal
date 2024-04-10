import React, { useRef } from "react";
 import FilmBlock from "../components/FilmBlock";
import { Skeleton } from "../components/FilmBlock/Skeleton";
import { useSearchFilmsQuery } from "../store/filmSlice/film.api";
import { useSelector } from "react-redux";

const Home = () => {
  const {searchValue} = useSelector(state => state.filter)
  const {isLoading, isError, data} = useSearchFilmsQuery(searchValue);
  const films = data?.Search?.map((obj) => <FilmBlock key={obj.imdbID} {...obj}/>);
  const skeletons = [...new Array(12)].map((_, i) => <Skeleton key={i}/>);
  console.log(data)
  return (
    <div className="container">
      <div className="content__top">
        
      </div>
      <h2 className="content__title">Все фильмы</h2>
      <div className="content__items">
        {films}
      </div>
    </div>
  );
}

export default Home;