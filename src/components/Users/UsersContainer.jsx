import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    setFollowingProgress,
    unfollow
} from "../../redux/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";


export class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }


    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   setFollowingProgress={this.props.setFollowingProgress}
                   followingProgress={this.props.followingProgress}
            />
        </>
    }
}


let mapStateTtoProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress

    }

}

export default connect(mapStateTtoProps,
    {
        follow, unfollow,
        setCurrentPage,
        setFollowingProgress, getUsers
    })(UsersContainer)