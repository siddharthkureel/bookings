import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { signIn } from "../actions";
class Signin extends Component {
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
         this.props.signIn(formValues)
    }
    render() {
        return (
            <section className="section-book">
                <div className="row" style={{ maxWidth: '100%' }}>
                    <div className="book">
                        <div className="book__form">
                            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="form" style={{ boxSizing: 'unset !important' }}>
                                <div className="u-margin-bottom-medium">
                                    <h2 className="heading-secondary">
                                        SignIn
                                    </h2>
                                </div>

                                <div className="form__group">
                                    <Field type="text" placeholder="email" name="email" component={this.renderInputs} id="email" className="form__input" />
                                    <label htmlFor="email" className="form__label">Email address</label>
                                </div>
                                <div className="form__group">
                                    <Field type="password" name="password" component={this.renderInputs} className="form__input" placeholder="Password" id="password" /> 
                                    <label htmlFor="password" className="form__label">Email address</label>
                                </div>


                                <div className="form__group">
                                    <button className="btn btn--green">SignIn &rarr;</button>
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
    } 
    return errors;
}
export default connect(null,{signIn})(reduxForm({
    form: 'SignIn Form',
    validate
})(Signin));