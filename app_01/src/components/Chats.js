import React, {useEffect, useState} from 'react';
import ListItem from "@mui/material/ListItem";
import {Link} from "react-router-dom";
import Chat from './Chat'


const Chats = (props) => {
    return (
        <div>
            {props.arrChats.map((value) => (
                <Chat key={value.id} value={value} deleteChat={props.deleteChat}/>
            ))
            }
            <button onClick={props.addChat}>Add new chat</button>
        </div>
    );
};

export default Chats;