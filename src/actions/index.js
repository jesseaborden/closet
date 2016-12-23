import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER } from './types';
import { UNAUTH_USER } from './types';
import { AUTH_ERROR } from './types';

const ROOT_URL = "http://localhost:8000";

export function signinUser ({email, password}){
    return function(dispatch){
        axios.post(`${ROOT_URL}/api/authentication/signin`, {email, password})
        .then(response => {

            dispatch({ type: AUTH_USER });
            localStorage.setItem('token', response.data.token);
            browserHistory.push('/feature');
        })
        .catch(() => {
            console.log("inside catch");
            dispatch(authError("Incorrect login details"));
        })
    }
}

export function authError(error){
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function signoutUser(){
    localStorage.removeItem('token')

    return function(dispatch){
        dispatch({type: UNAUTH_USER});
    }
}