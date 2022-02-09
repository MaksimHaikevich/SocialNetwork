import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

export const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        alt="logo"
        src="https://www.clipartmax.com/png/small/184-1841721_web-development-web-design-logo-download-logo-website-png.png"
      />
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>Log out</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};
