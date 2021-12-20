import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

export const Header = (props) => {
    return (
        <header className={s.header}>
            <img
                src="https://www.clipartmax.com/png/small/184-1841721_web-development-web-design-logo-download-logo-website-png.png"/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>


        </header>
    )
}