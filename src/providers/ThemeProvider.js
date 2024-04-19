import { useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { changeCssRootVar } from '../model/changeCssRootVar';
import { storage } from '../model/storage';

export const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState(storage.getItem('theme'));

  changeCssRootVar(theme);
  
  const changeTheme = (theme) => {
    storage.setItem('theme', theme);
    setTheme(theme);
    changeCssRootVar(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
};