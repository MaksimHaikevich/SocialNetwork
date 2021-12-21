import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

export const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / 600)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div>
            <div className={s.pagesWrapper}>
                {
                    pages.map(p => {
                        return <span className={props.currentPage === p ? s.selectedPage : s.page}
                                     onClick={(e) => {
                                         props.onPageChanged(p)
                                     }}>

                            {p}
                        </span>
                    })}

            </div>
            {
                props.users.map(u => <div className={s.userWrapper} key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                     className={s.usersPhoto}/>
                            </NavLink>

                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                                    props.setFollowingProgress(true, u.id)
                                    usersAPI.unfollowUser(u.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                            props.setFollowingProgress(false, u.id)

                                        })


                                }}>Unfollow</button>
                                : <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                                    props.setFollowingProgress(true, u.id)
                                    usersAPI.followUser(u.id)
                                        .then(data => {
                                            if (data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                            props.setFollowingProgress(false, u.id)

                                        })

                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}