import React from "react";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

export const Users = ({currentPage, onPageChanged, totalUsersCount,followingProgress,follow,unfollow, users}) => {


    return (
        <div>


            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       totalUsersCount={totalUsersCount}/>
            <div>
                {
                    users.map(u =><User key={u.id} user={u} followingProgress={followingProgress} follow={follow} unfollow={unfollow}/>)
                }
            </div>

        </div>
    )
}
