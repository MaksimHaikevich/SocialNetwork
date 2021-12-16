import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/messagesReducer";

export const Dialogs = (props) => {

    let dialogsElements = props.stateLocal.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.stateLocal.messages
        .map(m => <Message message={m.message}/>)
    let newMessageBody = props.stateLocal.newMessageBody

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {

        let body = e.target.value
        let action = updateNewMessageBodyCreator(body)
        props.dispatch(action)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'/></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>


        </div>
    )
}