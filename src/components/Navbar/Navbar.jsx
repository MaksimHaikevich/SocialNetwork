import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {FriendBar} from "./FriendBar/FriendBar";


export const Navbar = (props) => {

    let friendBarElements = props.siteBar.friendBar
        .map(f => <FriendBar avatar={f.avatar} name={f.name}/>)


    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.settings}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.friendsBar}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Friends</NavLink>
                <div className={s.friendsBarIcons}>
                    {friendBarElements}
                </div>
            </div>

        </nav>
    )
}