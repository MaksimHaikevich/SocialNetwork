export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 23},
                {id: 2, message: 'Hi boys', likesCount: 12},
            ],
            newPostText: '',
        },
        messagesPage: {
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
                {id: 6, message: 'Hi Kalhen'},
            ],
        },
        siteBar: {
            friendBar: [
                {
                    id: 1,
                    name: 'Maksim ',
                    avatar: 'https://transplant.org.au/wp-content/uploads/2018/06/James-avatar-for-website-300x300.png'
                },
                {
                    id: 2,
                    name: 'Alyona ',
                    avatar: 'https://transplant.org.au/wp-content/uploads/2018/06/James-avatar-for-website-300x300.png'
                },
                {
                    id: 3,
                    name: 'Dima ',
                    avatar: 'https://transplant.org.au/wp-content/uploads/2018/06/James-avatar-for-website-300x300.png'
                },
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {

            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }

    },
}

window.store = store;