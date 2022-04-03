import {useEffect, useState} from 'react';
import './App.css';
import {makeStyles, useTheme} from '@mui/styles';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './components/About';
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import {useDispatch, useSelector} from "react-redux";


const useStyles = makeStyles((theme) => {
        console.log(theme);
        return {
            root: {
                background: theme.palette.primary.main,
            },
        }
    }
)
export const App = () => {

    const [arrChats, setArrChats] = useState([]);

    let profile = {id: 4, name: 'Profile', path: "/profile"};
    let arrayChats = [
        {id: 1, name: 'Chat room 1', path: "/room-1"},
        {id: 2, name: 'Chat room 2', path: "/room-2"},
        {id: 3, name: 'Chat room 3', path: "/room-3"},
        {id: 4, name: 'Chat room 4', path: "/room-4"},
    ];
    useEffect(() => {
        setArrChats(
            arrayChats
        )
    }, []);

    const deleteChat = (event) => {
        let chats = arrChats.filter((item) => item.id != event.target.dataset.id);
        setArrChats(chats);
    }
    const addChat = () => {
        setArrChats([...arrChats, {id: arrChats[arrChats.length - 1].id+1, name: `Chat room ${arrChats[arrChats.length - 1].id+1}`,path:`/room-${arrChats[arrChats.length - 1].id+1}`}]);
    }
    return (
        <div>
            <Router>
                <div id="container">
                    <Routes>
                        <Route path="/"
                               element={<Home profile={profile} arrChats={arrChats} deleteChat={deleteChat}
                                              addChat={addChat}/>}/>
                        <Route path="/profile" element={<About/>}/>
                        <Route path="/room-:id" element={<Home profile={profile} arrChats={arrChats}/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

