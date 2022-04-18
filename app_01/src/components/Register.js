import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {registerInitiate} from "../redux/reducers/actions";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.currentUser);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== passwordConfirm) {
            return;
        }
        dispatch(registerInitiate(email, password, name))
    }
    useEffect(() => {
            if (user) {
                navigate('/welcome')
            }
        }, [navigate, user]
    )
    return (
        <div style={{fontSize: 15, display: "table-caption", alignItems: "center", flexDirection: "column"}}>
            Register
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Name</legend>
                    <input type="text" value={name} onChange={event => setName(event.target.value)}/>
                </fieldset>
                <fieldset>
                    <legend>Email</legend>
                    <input type="text" value={email} onChange={event => setEmail(event.target.value)}/>
                </fieldset>
                <fieldset>
                    <legend>Password</legend>
                    <input type="text" value={password} onChange={event => setPassword(event.target.value)}/>
                </fieldset>
                <fieldset>
                    <legend>Confirm</legend>
                    <input type="text" value={passwordConfirm} onChange={event => setPasswordConfirm(event.target.value)}/>
                </fieldset>
                <button type={'submit'}>Save</button>
            </form>
        </div>
    );
};

export default Register;