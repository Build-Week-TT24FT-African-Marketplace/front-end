import React, { useState } from 'react';
import { login } from '../actions/loginStateAction';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const userData = {
    user_email: '',
    user_password: '',
}

export default function LoginPage(props){
    const [userLogin, setUserLogin] = useState(userData);
    const dispatch = useDispatch();
    const {disabled} = props;
    const { push } = useHistory();

    const onChange = (evt) => {
        const {name, value} = evt.target;
        setUserLogin({...userLogin, [name]: value});
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        dispatch(login(userLogin));
        push('/')
    }

    return (
        <div>
            ASDFLogin
            <form onSubmit={onSubmit}>
                <label>Email
                    <input
                    name="email"
                    value={userLogin.email}
                    type="email"
                    onChange={onChange}
                    ></input>
                </label>
                <label>Password
                    <input
                    name="password"
                    value={userLogin.password}
                    type="text"
                    onChange={onChange}
                    ></input>
                </label>

                <button disabled={disabled}>Login</button>
            </form>

        </div>
    )
}