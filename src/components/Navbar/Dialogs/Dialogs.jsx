import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";
import {Redirect} from "react-router-dom";

export const Dialogs = (props) => {

    let dialogsElements = props.messagesPage.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messagesPage.messages
        .map(m => <Message message={m.message}/>)

    let onSendMessageClick = () => {
        props.sendMessageClick()
    }

    let onNewMessageChangeBody = (e) => {
        let body = e.target.value
        props.newMessageChange(body)
    }
    if (!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={props.messagesPage.newMessageBody}
                                   onChange={onNewMessageChangeBody}
                                   placeholder='Enter your message'/></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>


        </div>
    )
}