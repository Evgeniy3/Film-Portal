import React, { useEffect } from 'react'
import logoSvg from '../assets/img/logo.svg'
import { Link, useLocation } from 'react-router-dom';
import Search from './Search';

const Header = () => {
  const isMounted = React.useRef(false);
  const location = useLocation();


  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify();
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, []);

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
        <Search />
        <div className="header__registration">
            <Link to="/registration" className="button button--registration">
              <span>Войти</span>
              <div className="button__delimiter"></div>
              <span>Регистрация</span>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
