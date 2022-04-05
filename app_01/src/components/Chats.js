import React, {useEffect, useState} from 'react';
import ListItem from "@mui/material/ListItem";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";


const Chats = () => {
    const chats = useSelector(state =>
        state.arrayChats
    )
    const dispatch = useDispatch();

    const deleteChat = (id) => {
        dispatch({type: 'deleteChat', id: id})
    }
    const addChat = () => {
        let lastObject = {
            id:0,
        }
        if(chats.length){
            lastObject = chats[chats.length - 1];
        }
        const obj = {id: lastObject.id+1, name: `Chat room ${lastObject.id+1}`,path:`/room-${lastObject.id+1}`}
        dispatch({type: "addChat",  chat: obj})
    }
    return (
        <div>
            {chats.map((chat) => (
                <div key={chat.id}>
                    <ListItem>
                        <Link to={chat.path}>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg"
                                 alt=""></img>
                            <div>
                                <h2>{chat.name}</h2>
                                <h3>
                                    <span className="status orange"></span>
                                    offline
                                </h3>

                            </div>
                        </Link>
                        <button onClick={() => deleteChat(chat.id)}>x
                        </button>
                    </ListItem>
                </div>
            ))
            }
            <button onClick={addChat}>Add new chat</button>
        </div>
    );
};

export default Chats;