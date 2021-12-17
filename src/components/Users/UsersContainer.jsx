import React from "react";
import {connect} from "react-redux";
import {followCreator, setUsersCreator, unfollowCreator} from "../../redux/usersReducer";
import {Users} from "./Users";

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