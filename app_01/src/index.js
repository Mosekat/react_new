import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider, createTheme} from '@mui/material';
import './index.css';
import {App} from "./App";
import {composeWithDevTools} from "redux-devtools-extension";


import {createStore} from 'redux';
import {Provider} from 'react-redux';

const theme = createTheme({
    palette: {
        primary: {
            main: "#ff0044",
        },
        secondary: {
            main: "#0098FF",
        },
    },
})
const initialState = {
    contacts: [{
        name: 'Екатерина',
        email: 'mail@mail.ru',
        phone: '+7-777-77-77',
    }],
    isActive: false,

}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addContact':
   return '';
            break;
        case 'add':
            if (state.isActive) {
                state.isActive = false;
            } else {
                state.isActive = true;
            }
            break;
    }
    return {...state};
}
const store = createStore(reducer,composeWithDevTools());
ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <App/>
            </Provider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);


