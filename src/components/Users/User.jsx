import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";

export const User = ({ user, followingProgress, follow, unfollow }) => {
  return (
    <div className={s.userWrapper}>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              alt="img"
              src={user.photos.small != null ? user.photos.small : userPhoto}
              className={s.usersPhoto}
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{"user.location.city"}</div>
          <div>{"user.location.country"}</div>
        </span>
      </span>
    </div>
  );
};
