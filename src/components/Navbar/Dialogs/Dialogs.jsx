import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validations/validators";

export const Dialogs = (props) => {

    let dialogsElements = props.messagesPage.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messagesPage.messages
        .map(m => <Message message={m.message}/>)

    let addNewMessage = (values) => {
        props.sendMessageClick(values.newMessageBody)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>


        </div>
    )
}

const maxLength70 = maxLengthCreator(70)


const AddMessageForm = (props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required,maxLength70]} component={Textarea} name={'newMessageBody'} placeholder={'Enter your message'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form:'dialogAddMessageForm'})(AddMessageForm)