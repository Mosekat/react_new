import Message from "./Message";
import {makeStyles} from '@mui/styles';
import Button from '@mui/material/Button';//не пригодилась
import React, {useEffect, useRef, useState} from "react";


export const MessageList = () => {
    const [messageList, setMessageList] = useState([]);
    const [message, setMessage] = useState('');

    const writeMessage = (event) => {
        setMessage(event.target.value);
    }
    const addMessage = (msg) => {
        if (msg) {
            setMessageList([...messageList, {author: 'User', text: msg}])
            setMessage('');
            ref.current.focus();
        } else {
            alert('Enter a message');
        }
    }

    useEffect(() => {
        let timerId = null;
        if (messageList.length) {
            const lastMessage = messageList[messageList.length - 1];
            if (lastMessage.author === 'User') {
                timerId = setTimeout(() => {
                    setMessageList([...messageList, {author: 'Bot', text: 'hello User'}])
                }, 1500);
                console.log(timerId)
            }
        }
        return () => clearInterval(timerId);
    }, [messageList])

    const HandlePressInput = (event) => {
        if (event.code == "Enter") {
            setMessageList([...messageList, {author: 'User', text: event.target.value}]);
            setMessage('');
            ref.current.focus();
        }
    }

    const ref = useRef();
    useEffect(() => {
        if (ref.current) {
            ref.current.focus();
        }
    }, []);
    return (
        <div>
            <ul id="chat">
                {messageList.map((msg, index) => <Message key={index} author={msg.author} text={msg.text}/>)}
            </ul>
            <footer>
                <textarea onChange={writeMessage} onKeyPress={HandlePressInput} ref={ref} type="text" value={message}
                          placeholder="Type your message"></textarea>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png" alt=""></img>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png" alt=""></img>
                <a href="#" onClick={() => {
                    addMessage(message)
                }}>Send</a>
            </footer>
        </div>
    )
}