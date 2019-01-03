//Sending an AJAX request to the node.js server

import axios from 'axios';
import { GET_ERRORS } from './types';

export const registerUser = (user, history) => dispatch => {
    axios.post('/api/users/register', user)
    .then(res => history.push('/login'))
    .catch(err =>{
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    });
}

export const loginUer = (user) => dispatch => {
    axios.post('/api/users/login', user)
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    });
}
