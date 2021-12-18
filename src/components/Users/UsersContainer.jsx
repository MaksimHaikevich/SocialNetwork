import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setFetching,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../../redux/usersReducer";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";


export class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)

            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFetching(false)
                this.props.setUsers(response.data.items)

            })
    }


    render() {
        debugger


        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                // isFetching={this.props.isFetching}
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

    }

}
// let mapDispatchTtoProps = (dispatch) => {
//     return {
//         follow: (userID) => {
//             dispatch(followCreator(userID))
//         },
//         unfollow: (userID) => {
//             dispatch(unfollowCreator(userID))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersCreator(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageCreator(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalCountCreator(totalCount))
//         },
//         setFetching: (isFetching) => {
//             dispatch(isFetchingCreator(isFetching))
//         }
//     }
//
//
// }

export default connect(mapStateTtoProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setFetching})(UsersContainer)