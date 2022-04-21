import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {logoutInitiate} from "../redux/reducers/actions";
import {useNavigate} from "react-router-dom";

const Welcome = () => {
    const user = useSelector(state => state.auth.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleAuth = () => {
        if (user) {
            dispatch(logoutInitiate())
        }

        setTimeout(()=>{
            navigate('/')
        },1000)
    }
    return (
        <div style={{fontSize: 15}}>
            Welcome user
            <button onClick={handleAuth}>Exit</button>
        </div>
    );
};

export default Welcome;