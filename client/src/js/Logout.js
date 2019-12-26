import React from 'react';
import { logout, isLoggedIn } from './utils/auth';

const Logout = (props) => {
   
    const handleLogout = () => {
        logout();
        props.hist.push('/');
    }

    return(
        <button onClick={() => handleLogout()}>Logout</button>
    )    
}

export default Logout;