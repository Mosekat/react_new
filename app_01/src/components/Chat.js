import React from 'react';
import {Link} from "react-router-dom";
import ListItem from "@mui/material/ListItem";

const Chat = (props) => {
    return (
        <div>
            <ListItem >
                <Link to={props.value.path}>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt=""></img>
                    <div>
                        <h2>{props.value.name}</h2>
                        <h3>
                            <span className="status orange"></span>
                            offline
                        </h3>

                    </div>
                </Link>
                <button data-id={props.value.id} onClick={props.deleteChat} >x</button>
            </ListItem>
        </div>
    );
};

export default Chat;