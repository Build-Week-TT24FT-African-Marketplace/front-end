import React from 'react'


export default function LoginPage(props){

    const {submit, change, values, disabled} = props;

    const onChange = (evt) => {
    //    const {name, value} = evt.target;
    //     change(name, value);
    }
    const onSubmit = (evt) => {
        // evt.preventDefault;
        // submit();
    }
    return (
        <div>
            ASDFLogin
            {/* <form onSubmit={onSubmit}>

                <label>Email
                    <input
                    name="email"
                    value={values.email}
                    type="email"
                    onChange={onChange}
                    ></input>
                </label>
                <label>Password
                    <input
                    name="password"
                    value={values.password}
                    type="text"
                    onChange={onChange}
                    ></input>
                </label>

                <button disabled={disabled}>Login</button>
            </form> */}
        </div>
    )
}