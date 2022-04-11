import {useEffect, useState} from 'react';
import './App.css';
// import {makeStyles, useTheme} from '@mui/styles';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './components/About';
import Home from "./components/Home";
import NotFound from "./components/NotFound";

export const App = () => {

    return (
        <div>
            <Router>
                <div id="container">
                    <Routes>
                        <Route path="/"
                               element={<Home />}/>
                        <Route path="/profile" element={<About/>}/>
                        <Route path="/room-:id" element={<Home/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

