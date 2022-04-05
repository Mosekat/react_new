import {createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import {chatsReducer} from "./reducer/chatsReduser";

const store = createStore(chatsReducer,composeWithDevTools());
export default  store;