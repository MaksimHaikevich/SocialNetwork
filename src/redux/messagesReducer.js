const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: 'Maksim'},
        {id: 2, name: 'Alyona'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Dania'},
        {id: 5, name: 'Nastya'},
        {id: 6, name: 'Nysha'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Hi Max!'},
        {id: 4, message: 'Dania'},
        {id: 5, message: 'Meow'},
        {id: 6, message: 'Hi Alex'},
    ],
    newMessageBody: '',
}

export const messagesReducer = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }

        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
                newMessageBody: '',

            }
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})