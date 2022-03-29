import React, {useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {Link} from "react-router-dom";

export const ChatList = (props) => {

    return (
        <List>
            {props.arrChats.map((value) => (
                <ListItem key={value.id}>
                    <Link to={value.path}>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt=""></img>
                        <div>
                            <h2>{value.name}</h2>
                            <h3>
                                <span className="status orange"></span>
                                offline
                            </h3>
                        </div>
                    </Link>
                </ListItem>
            ))
            }
            <ListItem>
                <Link to={props.profile.path}>
                    <div>
                        <h2>{props.profile.name}</h2>
                    </div>
                </Link>
            </ListItem>
        </List>
    );
}