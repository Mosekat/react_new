import {useEffect, useState} from 'react';
import './App.css';
import {makeStyles, useTheme} from '@mui/styles';
import {MessageList, ChatList} from './components';

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
    let arrayChats = [{id: 1, name: 'Chat room 1'}, {id: 2, name: 'Chat room 2'}, {id: 3, name: 'Chat room 3'}];
    useEffect(() => {
        setArrChats(
            arrayChats
        )
    }, []);

    return (<div>
        <div id="container">
            <aside>
                <header>
                    <input type="text" placeholder="search"></input>
                </header>
                <ChatList arrChats={arrChats}></ChatList>
            </aside>
            <main>
                <header>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt=""></img>
                    <div>
                        <h2>Chat</h2>
                        <h3>already 1902 messages</h3>
                    </div>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_star.png" alt=""></img>
                </header>
                <MessageList/>

            </main>
        </div>
    </div>);
}

