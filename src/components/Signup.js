import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../actions';
import { reduxForm, Field } from 'redux-form';


class Signup extends Component {
    
    handleFormSubmit(formProps){
        console.log(formProps);
        this.props.signupUser(formProps)

    }

    render(){

    const { handleSubmit } = this.props;

        return (
            <form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
                <div>
                    <Field name="email" component={renderField} />
                    <Field name="password" component={renderField} type="password" />
                    <Field name="passwordConfirm" component={"input"} type="password" />
                </div> 
                <button type="submit"></button>
            </form>
        )
    }
}

function validate(formProps){
    const error = {}
    const requiredFields = ['email', 'password'];

    requiredFields.forEach(function(field){
        if(!formProps[field]){
            error[field] = 'Required Field';
        }
    });

    if(formProps.password !== formProps.passwordConfirm){
        error.password = "Passwords must match";
    }
    return error
}

function renderField ({ input, type, meta: { touched, error} }) {
	return (
		<div>
			<input {...input} type={type} />
			<div>
				{touched ? <span>{error}</span> : ''}
			</div>
		</div>
	)
}

Signup = reduxForm({
    form:'signup',
    validate
})(Signup);

export default connect(null, { signupUser })(Signup);