import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider, createTheme} from '@mui/material';
import './index.css';
import {App} from "./App";
import store from './redux/configureStore';
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


