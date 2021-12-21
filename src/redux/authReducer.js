import {headerAPI} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA'


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
    // isFetching: true
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }


        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})

// export const setFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const authMe = () => {
    return (dispatch) => {
        headerAPI.auth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }
}