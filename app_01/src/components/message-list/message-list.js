import Message from "./Message";
import React, {useEffect, useRef, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {messageListSelector} from "../../redux/reducers/selectors/selectors";
import {getAnswer} from "../../redux/reducers/actions";

export const MessageList = (props) => {

    const [message, setMessage] = useState('');
    const messageList = useSelector(messageListSelector);
    const dispatch = useDispatch();
    const writeMessage = (event) => {
        setMessage(event.target.value);
    }
   const addMessage = (msg) => {
        if (msg) {
            dispatch({type: 'addMessage', payload: {author: 'User', text: msg, chatId: props.chatId}});
            setMessage('');
            ref.current.focus();
        } else {
            alert('Enter a message');
        }
    }
    useEffect(() => {
       return dispatch(getAnswer())

    }, [messageList])

    const HandlePressInput = (event) => {
        if (event.code == "Enter") {
            addMessage(event.target.value)
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
                {messageList.map((msg, index) => msg.chatId === props.chatId ?
                    <Message key={index} author={msg.author} text={msg.text}/> : '')}
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