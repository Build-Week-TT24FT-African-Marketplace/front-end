import React, { useState } from 'react';
import { login } from '../actions/loginStateAction';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';


const userData = {
    user_email: '',
    user_password: '',
}

const LoginPage = (props) => {
    const [userLogin, setUserLogin] = useState(userData);
    // const {disabled} = props;
    const { push } = useHistory();

    const onChange = (evt) => {
        const {name, value} = evt.target;
        setUserLogin({...userLogin, [name]: value});
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        console.log(userLogin);
        props.login(userLogin);
        
        push('/')
        
    }

    return (
        <div>
            ASDFLogin
            <form onSubmit={onSubmit}>
                <label>Email
                    <input
                    name="user_email"
                    value={userLogin.user_email}
                    type="email"
                    onChange={onChange}
                    ></input>
                </label>
                <label>Password
                    <input
                    name="user_password"
                    value={userLogin.user_password}
                    type="text"
                    onChange={onChange}
                    ></input>
                </label>

                <button>Login</button>
            </form>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        error: state.errorText
    }
}

export default connect(mapStateToProps, {login}) (LoginPage);