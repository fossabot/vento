
import React from 'react';
import URIs from './apis';
const axios = require('axios');

const TOKEN_KEY = 'vento_jwt';

export async function login(payload) {
    console.log(payload);
    const headers = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const response = await axios.post(URIs.login, payload, headers);
    if (response && response.data) {
        if (response.data.token) {
            console.log(response.data.token);
            localStorage.setItem(TOKEN_KEY, response.data.token);
        } else {
            throw (
                {
                    'message': response.data.message,
                    'code': response.data.code
                });
        }
    }
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const isLoggedIn = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }
    return false;
}
