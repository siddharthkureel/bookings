import React, { Component } from 'react';
import { Field, reduxForm }  from "redux-form";
import { connect } from "react-redux";
import { registerUser } from "../actions";
import history from "../../history";
class Register extends Component {
    renderError = ({ touched, error }) => {
        if (touched) {
            return <div>{error}</div>
        }
        return null;
    }
    renderInputs = (props) => {
        return (
            <>
                <input {...props.input} {...props} />
                <div>{this.renderError(props.meta)}</div>
            </>
        );
    }
    onSubmit = (formValues) => {
        this.props.registerUser(formValues)
    }
    render() {
        return (
            <section className="section-book">
                <div className="row" style={{ maxWidth:'100%'}}>
                    <div className="book">
                        <div className="book__form">
                            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="form" style={{ boxSizing:'unset !important' }}>
                                <div className="u-margin-bottom-medium">


                                    <h2 className="heading-secondary">
                                        Register
                                    </h2>
                                </div>
                                <div className="form__group">
                                    <Field type="text" placeholder="email" name="email" component={this.renderInputs} id="email" className="form__input"/>
                                    <label htmlFor="email" className="form__label">Email address</label>
                            
                                </div>
                                <div className="form__group">
                                    <Field type="password" name="password" component={this.renderInputs} className="form__input" placeholder="Password" id="password" /> 
                                    <label htmlFor="password" className="form__label">Password</label>
                                </div>
                                <div className="form__group">
                                    <Field type="password" name="confirmPassword" component={this.renderInputs} className="form__input" placeholder="Confirm Password" id="confirmPassword" />
                                    <label htmlFor="confirmPassword" className="form__label">Confirm Password</label>
                                </div>

                                <div className="form__group">
                                    <button onClick={this.formSubmit} className="btn btn--green">Register &rarr;</button>
                                    <button onClick={() => { history.push('/signin') }} className="btn btn--green">Signin &rarr;</button >
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
const validate = (formValues) => {
    let errors = {}
    if (!formValues.email) {
        errors.email = 'email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
        errors.email = 'Invalid email address'
    }
    if (!formValues.password) {
        errors.password = 'password is required'
    } else if(formValues.password!==formValues.confirmPassword){
        errors.confirmPassword = 'password should match'
    }
    else if (formValues.password.length < 5 && formValues.password.length > 15) {
        errors.name = 'Must be 15 characters or less'
    }
    return errors;
}
export default connect(null,{ registerUser })(reduxForm({
    form:'RegisterForm',
    validate
})(Register));