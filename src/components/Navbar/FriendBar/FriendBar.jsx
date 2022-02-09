import React from "react";
import s from "./FriendBar.module.css";

export let FriendBar = (props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.avatar}>
        <img alt="avatar" src={props.avatar} />
      </div>
      <div className={s.names}>{props.name}</div>
    </div>
  );
};
