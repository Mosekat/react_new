import React, {useState} from 'react';
import List from '@mui/material/List';

import Profile from '../Profile';
import Chats from '../Chats'

export const ListElements = () => {

    return (
        <List>
            <Chats />
            <Profile/>
        </List>
    );
}