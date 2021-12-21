import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/messagesReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessageClick: () => {
            dispatch(sendMessageCreator())
        },
        newMessageChange: (body) => {
            let action = updateNewMessageBodyCreator(body)
            dispatch(action)
        }
    }
}

 export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

