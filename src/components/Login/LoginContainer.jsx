import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";
import {compose} from "redux";
import {Login} from "./Login";

let mapStateToProps = (state) => {
    return {
        loginPage: state.auth
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        LoginMe: (email, password) => {
            dispatch(setAuthUserData(email, password));
        },
    }

}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Login);