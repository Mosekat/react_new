import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {loginInitiate, registerInitiate} from "../redux/reducers/actions";

const Login = () => {

    const [email, setEmail] = useState('katerina@gmail.com');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.currentUser);
    const navigate = useNavigate();

    useEffect(()=>{
        if(user){
            navigate('/welcome')
        }
    },[user,navigate])
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email !==! password) {
            return;
        }
        dispatch(loginInitiate(email, password))
        if(user){
            navigate('/welcome')
        }
    }
    return (
        <div>
            Login
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Email</legend>
                    <input type="text" value={email} onChange={event => setEmail(event.target.value)}/>
                </fieldset>
                <fieldset>
                    <legend>Password</legend>
                    <input type="text" value={password} onChange={event => setPassword(event.target.value)}/>
                </fieldset>
                <button type={'submit'}>Enter</button>
            </form>
        </div>
    );
};

export default Login;