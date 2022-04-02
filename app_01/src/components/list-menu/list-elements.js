import React, {useState} from 'react';
import List from '@mui/material/List';

import Profile from '../Profile';
import Chats from '../Chats'

export const ListElements = (props) => {

    return (
        <List>
            <Chats arrChats={props.arrChats} deleteChat={props.deleteChat} addChat={props.addChat}/>
            <Profile profile={props.profile}/>
        </List>
    );
}