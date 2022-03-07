import React, {useState, useEffect} from "react";
import './App.css';
import Message from "../Message/Message";

function App() {
    const [messageList, setMessageList] = useState([]);
    const [message, setMessage] = useState('');

    const writeMessage = (event) => {
        setMessage(event.target.value);
    }
    const addMessage = (msg) => {
        if (msg) {
            setMessageList([...messageList, {author: 'User', text: msg}])
            setMessage('');
        }else{
            alert('Enter a message');
        }
    }
    console.log(messageList)

    useEffect(() => {
        let timerId = null;

        if (messageList.length) {
            const lastMessage = messageList[messageList.length - 1];
            if (lastMessage.author === 'User') {
                timerId = setTimeout(() => {
                    setMessageList([...messageList, {author: 'Bot', text: 'hello User'}])
                }, 2000);

            }
        }
        return () => clearInterval(timerId);
    }, [messageList])
    return (
        <div className="App">
            <header className="App-header">
            </header>

            <input onChange={writeMessage} type="text" placeholder="text message" value={message}
            />
            <button type="submit" onClick={() => {
                addMessage(message)
            }}>Send message
            </button>
            {messageList.map((msg, index) => <Message key={index} author={msg.author} text={msg.text}/>)}
        </div>
    );
}

export default App;
