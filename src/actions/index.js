import axios from 'axios';

const ROOT_URL = "http://localhost:8000";

export function signinUser ({email, password}){
    return function(dispath){
        axios.post(`${ROOT_URL}/api/authentication/signin`, {email, password});
    }
}