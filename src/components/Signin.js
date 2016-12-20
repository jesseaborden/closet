import React, { Component } from 'react';
import connect from 'react-redux';
import { reduxForm } from 'redux-form';

class Signin extends Component {
    render (){
        return (
            <form>
                <fieldset>
                    <label>Email:</label>
                    <input  />
                </fieldset>
                <fieldset>
                    <label>Password:</label>
                    <input  />
                </fieldset>
                <button action="submit">Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(Signin) 