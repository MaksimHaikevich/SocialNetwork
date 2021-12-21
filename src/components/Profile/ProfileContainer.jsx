import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getProfile(userId)
    }

    render() {

        return <Profile {...this.props} profile={this.props.profile}/>
    }


}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,

    }
}

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getProfile})(WithUrlDataContainerComponent);