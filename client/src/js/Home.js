import React from 'react';
import Logout from './Logout';

const Home = (props) => {
    return (
        <div>
            <Logout hist={ props.history }/>
            <h1>Home</h1>
        </div>
    )
}

export default Home;