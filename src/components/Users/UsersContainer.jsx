import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {followCreator, setUsersCreator, unfollowCreator} from "../../redux/usersReducer";

let mapStateTtoProps = (state) => {
    return {
        users: state.usersPage.users

    }

}
let mapDispatchTtoProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followCreator(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowCreator(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersCreator(users))
        }
    }

}


export const UsersContainer = connect(mapStateTtoProps, mapDispatchTtoProps)(Users)