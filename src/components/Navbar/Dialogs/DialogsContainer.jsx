import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/messagesReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}
let AuthRedirectComponent = withAuthRedirect(Dialogs)


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
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);