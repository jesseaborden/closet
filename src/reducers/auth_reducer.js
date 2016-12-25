import {AUTH_USER} from '../actions/types';
import {UNAUTH_USER} from '../actions/types';
import {AUTH_ERROR} from '../actions/types';

export default function(state = {}, action){
    switch(action.type){
        case AUTH_USER:
            return { ...state, authenticated: true };
        case UNAUTH_USER:
            return { ...state, authenticated:false };
        case AUTH_ERROR:
                console.log(action.payload);
            return { ...state, error: action.payload };
    }
    return state;
}