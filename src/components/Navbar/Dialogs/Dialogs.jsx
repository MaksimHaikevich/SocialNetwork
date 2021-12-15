import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";

export const Dialogs = (props) => {

    let dialogsElements = props.stateLocal.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.stateLocal.messages
        .map(m => <Message message={m.message}/>)

    let newMessageElement = React.createRef()
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <button onClick={addMessage}>Send</button>
            <textarea ref={newMessageElement}/>

        </div>
    )
}