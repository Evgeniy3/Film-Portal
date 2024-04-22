import React from "react";
import logoSvg from "../assets/img/logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Search from "./Search";
import AvatarSvg from "../assets/img/avatar.svg";
import { useTheme } from "../hooks/theme";
import { Theme } from "../context/ThemeContext";

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const theme = useTheme();

  const isAuth = JSON.parse(window.localStorage.getItem(`${process.env.REACT_APP_LS_KEY}`)!)

  const removeAccount = () => {
    if (window.confirm('Ты действительно хочешь удалить аккаунт?')) {
      window.localStorage.removeItem(`${process.env.REACT_APP_LS_KEY}`);
      window.location.reload();
    }
  };

  const changeAccount = () => {
    
    navigate('/registration')
  };

  const changeTheme = () => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

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
        {location.pathname === "/" && <Search />}
        <div className="header__registration">
          <button
            title="Сменить тему?"
            onClick={changeTheme}
            className="header__theme-btn"
          >
            <svg
              className="header__theme-svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 5.45455C7.49091 5.45455 5.45455 7.49091 5.45455 10C5.45455 12.5091 7.49091 14.5455 10 14.5455C12.5091 14.5455 14.5455 12.5091 14.5455 10C14.5455 7.49091 12.5091 5.45455 10 5.45455ZM0.909091 10.9091H2.72727C3.22727 10.9091 3.63636 10.5 3.63636 10C3.63636 9.5 3.22727 9.09091 2.72727 9.09091H0.909091C0.409091 9.09091 0 9.5 0 10C0 10.5 0.409091 10.9091 0.909091 10.9091ZM17.2727 10.9091H19.0909C19.5909 10.9091 20 10.5 20 10C20 9.5 19.5909 9.09091 19.0909 9.09091H17.2727C16.7727 9.09091 16.3636 9.5 16.3636 10C16.3636 10.5 16.7727 10.9091 17.2727 10.9091ZM9.09091 0.909091V2.72727C9.09091 3.22727 9.5 3.63636 10 3.63636C10.5 3.63636 10.9091 3.22727 10.9091 2.72727V0.909091C10.9091 0.409091 10.5 0 10 0C9.5 0 9.09091 0.409091 9.09091 0.909091ZM9.09091 17.2727V19.0909C9.09091 19.5909 9.5 20 10 20C10.5 20 10.9091 19.5909 10.9091 19.0909V17.2727C10.9091 16.7727 10.5 16.3636 10 16.3636C9.5 16.3636 9.09091 16.7727 9.09091 17.2727ZM4.53636 3.25455C4.18182 2.9 3.6 2.9 3.25455 3.25455C2.9 3.60909 2.9 4.19091 3.25455 4.53636L4.21818 5.5C4.57273 5.85455 5.15455 5.85455 5.5 5.5C5.84546 5.14545 5.85455 4.56364 5.5 4.21818L4.53636 3.25455ZM15.7818 14.5C15.4273 14.1455 14.8455 14.1455 14.5 14.5C14.1455 14.8545 14.1455 15.4364 14.5 15.7818L15.4636 16.7455C15.8182 17.1 16.4 17.1 16.7455 16.7455C17.1 16.3909 17.1 15.8091 16.7455 15.4636L15.7818 14.5ZM16.7455 4.53636C17.1 4.18182 17.1 3.6 16.7455 3.25455C16.3909 2.9 15.8091 2.9 15.4636 3.25455L14.5 4.21818C14.1455 4.57273 14.1455 5.15455 14.5 5.5C14.8545 5.84546 15.4364 5.85455 15.7818 5.5L16.7455 4.53636ZM5.5 15.7818C5.85455 15.4273 5.85455 14.8455 5.5 14.5C5.14545 14.1455 4.56364 14.1455 4.21818 14.5L3.25455 15.4636C2.9 15.8182 2.9 16.4 3.25455 16.7455C3.60909 17.0909 4.19091 17.1 4.53636 16.7455L5.5 15.7818Z" />
            </svg>
          </button>
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
              <img
                className="header__avatar-img"
                src={AvatarSvg}
                alt="Avatar"
              />
              <p>{isAuth?.name}</p>
              <div className="header__hideblock">
                <p onClick={changeAccount}>Добавить аккаунт?</p>
                <p onClick={removeAccount}>Удалить аккаунт?</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
