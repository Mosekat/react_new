import React from 'react';
import ListItem from "@mui/material/ListItem";
import {Link} from "react-router-dom";

const Profile = (props) => {
    console.log(props)
    return (
        <div>
            <ListItem>
                <Link to={props.profile.path}>
                    <div>
                        <h2>{props.profile.name}</h2>
                    </div>
                </Link>
            </ListItem>
        </div>
    );
};

export default Profile;