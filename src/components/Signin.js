import React, { Component } from 'react';
import connect from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class Signin extends Component {
    handleFormSubmit({email, password}) {
        console.log(email, password);
    }
    render() {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
                <fieldset>
                    <label>Email:</label>
                    <Field name="email" component={"input"} />
                </fieldset>
                <fieldset>
                    <label>Password:</label>
                    <Field  name="password" component={"input"} />
                </fieldset>
                <button action="submit">Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'signin'
})(Signin) 