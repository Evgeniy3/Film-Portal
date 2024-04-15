import React from "react";
import logoSvg from "../assets/img/logo.svg";
import { Link, useLocation } from "react-router-dom";
import Search from "./Search";
import AvatarSvg from '../assets/img/avatar.svg'

const Header = () => {
  const location = useLocation();

  const LS_FAV_KEY = 'regtk'
  const isAuth = JSON.parse(localStorage.getItem(LS_FAV_KEY))

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logoSvg} alt="Film logo" />
            <div>
              <h1>Film Portal</h1>
              <p>самые лучшие фильмы во вселенной</p>
            </div>
          </div>
        </Link>
        {location.pathname !== '/favourite' && <Search />}
        <div className="header__registration">
          <Link to="/favourite" className="button button--registration">
            <span>Избранные</span>
          </Link>
          {!isAuth ? (
          <Link to="/registration" className="button button--registration">
            <span>Войти</span>
            <div className="button__delimiter"></div>
            <span>Регистрация</span>
          </Link>
          ) : (
            <div className="header__avatar">
              <img className="header__avatar-img" src={AvatarSvg} alt="Avatar" />
              <p>{isAuth.name}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
