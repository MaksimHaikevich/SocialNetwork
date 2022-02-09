import { authMe } from "./authReducer";

const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";

let initialState = {
  initialized: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

export const setInitializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(authMe());
  Promise.all([promise]).then(() => {
    dispatch(setInitializedSuccess());
  });
};
