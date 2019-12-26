import React from "react";
import useForm from 'react-hook-form';
import { toast } from 'react-toastify';
import { login } from './utils/auth';

const Login = (props) => {
    const { register, handleSubmit, errors } = useForm(); // initialise the hook
    const onSubmit = data => {
        console.log(data);
        performLogin(data);
    };

    async function performLogin(data) {
        try{
            const payload = {};
            payload['username'] = data.userName;
            payload['password'] = data.password;
            await login(payload);
            props.history.push('/home');
        } catch(e) {
            console.log(e.code, e.message);
            toast(e.message, { type: toast.TYPE.ERROR, autoClose: 5000, position: toast.POSITION.TOP_CENTER });
        }
    }

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