import * as types from './actionTypes';
import {auth} from "../../services/firebase";

export const getAnswer = () => {
    return (dispatch, getState) => {
        let messageList = getState().messageList.messageList;
        let timerId = null;
        if (messageList.length) {
            const lastMessage = messageList[messageList.length - 1];
            if (lastMessage.author === 'User') {
                timerId = setTimeout(() => {
                    dispatch({
                        type: 'addMessage',
                        payload: {author: 'Bot', text: 'hello User', chatId: lastMessage.chatId}
                    })
                }, 1500);
            }
        }
        return () => clearInterval(timerId);
    }
}
export const registerStart = () => {
    return {
        type: types.REGISTER_START,
    }
}

export const registerSuccsess = (user) => (
    {
        type: types.REGISTER_SUCCSESS,
        payload: user
    }
)

export const registerError = (error) => (
    {
        type: types.REGISTER_ERROR,
        payload: error
    }
)

export const logoutStart = () => {
    return {
        type: types.LOGOUT_START,
    };
}

export const logoutSuccsess = () => {
    return {
        type: types.LOGOUT_SUCCSESS,
    };

}
export const logoutError = (error) => {
    return {
        type: types.LOGOUT_ERROR,
        payload: error
    }
}
export const loginStart = () => (
    {
        type: types.LOGIN_START
    }
)
export const loginSuccess = (user) => (
    {
        type: types.LOGIN_SUCCSESS,
        payload: user,
    }
)
export const loginError = (error) => (
    {
        type: types.LOGIN_ERROR,
        payload: error
    }
)

export const registerInitiate = (email, password, name) => {
    return (dispatch) => {
        dispatch(registerStart());

        auth
            .createUserWithEmailAndPassword(email, password)
            .then(({user}) => {
                user.updateProfile({
                    name
                })
                dispatch(registerSuccsess(user))
            })
            .catch(error => dispatch(registerError(error)))
    }
}

export const logoutInitiate = () => {
    return (dispatch) => {
        dispatch(logoutStart());
        auth
            .signOut()
            .then(() => dispatch(logoutSuccsess()))
            .catch(error => dispatch(logoutError()))
    }
}
export const loginInitiate = (email, password) => {
    return (dispatch) => {
        dispatch(loginStart());
        auth
            .signInWithEmailAndPassword(email, password)
            .then(({user}) => {
                dispatch(loginSuccess(user))
            })
            .catch((error => dispatch(loginError())))
    }
}