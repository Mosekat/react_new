import {compose, createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import chatsReducer from "./reducers/chatsReduser";
import messageListReducer from "./reducers/messageListReduser";
import {authReducer} from "./reducers/authReducer";
import {commentsReducer} from "./reducers/commentsReducer";
import profileReducer from "./reducers/profileReducer";
import {combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';// localStorage
import {createLogger} from "redux-logger/src";

const persistConfig = {
    key: 'root',
    storage
}

export const rootReducer = combineReducers({
    chats: chatsReducer,
    messageList: messageListReducer,
    profile: profileReducer,
    comments: commentsReducer,
    auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const logger = createLogger({
    collapsed: true,
    diff: true,

})
const unification = compose(applyMiddleware(thunk, logger), composeWithDevTools())
export const store = createStore(persistedReducer, unification);
export const persistor = persistStore(store);

// export default store;