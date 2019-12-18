import React from "react";

import useForm from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, errors } = useForm(); // initialise the hook
    const onSubmit = data => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="userName">Username</label>
                <input name="userName" ref={register({ required: true })} />
                <span className="error">{errors.userName && 'User name is required.'}</span>
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input name="password" type="password" ref={register({ required: true })} />
                <span className="error">{errors.password && 'Password is required.'}</span>
            </div>

            <input type="submit" />
        </form>
    );
}

export default Login;