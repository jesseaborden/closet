import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { signinUser } from '../actions';

class Signin extends Component {
    handleFormSubmit({email, password}) {
        console.log(this);
        this.props.signinUser({email, password});
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

function mapStateToProps(state) {
    return {
        auth: state.auth.error
    }
}

Signin = reduxForm({
    form: 'signin'
})(Signin);

export default Signin = connect(null, { signinUser })(Signin)

