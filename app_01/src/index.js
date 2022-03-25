import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider, createTheme} from '@mui/material';
import './index.css';
import {App} from "./App";

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
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);


