import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/messagesReducer";
import {Dialogs} from "./Dialogs";

export const DialogsContainer = (props) => {

    let state = props.store.getState()
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body) => {
        let action = updateNewMessageBodyCreator(body)
        props.store.dispatch(action)
    }


    return <Dialogs sendMessageClick={onSendMessageClick}
                    newMessageChange={onNewMessageChange}
                    dialogs={state.messagesPage.dialogs}
                    messages={state.messagesPage.messages}
                    newMessageBody={state.messagesPage.newMessageBody}

    />

}