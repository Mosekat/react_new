import {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './components/About';
import Home from "./components/Home";
import {Comments} from './components/Comments'
import NotFound from './components/NotFound';
import Layout from "./components/Layout";
import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

export const App = () => {
    const user = useSelector(state => state.auth.currentUser);
    console.log(user)
    return (
        <div>
            <Router>
                <div id="container">
                    <Routes>
                        {!user? (
                                    <>
                                        <Route path="/"
                                                 element={<Layout/>}>
                                            <Route index path='/' element={<Register/>}/>
                                            <Route path="/login" element={<Login/>}/>
                                            <Route path="/welcome" element={<Welcome/>}/>
                                            <Route index path='*' element={<Register/>}/>
                                        </Route>
                                    </>
                                )
                                    :
                                (
                                    <>
                                        <Route path="/" element={<Home/>}/>
                                        <Route path="/profile" element={<About/>}/>
                                        <Route path="/room-:id" element={<Home/>}/>
                                        <Route path="/welcome" element={<Welcome/>}/>
                                        <Route path="/comments" element={<Comments/>}/>
                                        <Route path="/login" element={<Login/>}/>
                                        <Route path="*" element={<NotFound/>}/>
                                    </>
                                )
                        }
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

