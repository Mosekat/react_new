import React from 'react';
import ListItem from "@mui/material/ListItem";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Profile = () => {
    let profile = useSelector(state => state.profile)
    return (
        <div>
            <ListItem>
                <Link to={profile.path}>
                    <div>
                        <h2>{profile.name}</h2>
                    </div>
                </Link>
            </ListItem>
        </div>
    );
};

export default Profile;