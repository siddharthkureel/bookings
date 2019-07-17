import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { firebaseDB } from '../../firebase';
import history from '../../history';
import Auth from "../HOC/Auth";
const reasons = ['request refund', 'request change in package', 'request change in dates']
const renderSelector = ({ input, meta: { touched, error } }) => {
    return (
        <div>
            <select className="form__input" {...input}>
                <option className="form__input" value={''}>select a reason</option>
                {reasons.map(val => (
                    <option className="form__input" value={val} key={val}>
                        {val}
                    </option>
                ))}
            </select>
            {touched && error && <span>{error}</span>}
        </div>
    )
}
class Modify extends Component {

    onSubmit=(formValues)=>{
    firebaseDB.ref(`booking/${this.props.match.params.key}`)
        .update({ status: formValues.status }).then(() => {
            history.push('/manage')
        })
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
                                        Modify
                                    </h2>
                                </div>

                                <div className="form__group">
                                    <Field type="text" placeholder="status" name="status" component={renderSelector} id="status" className="form__input" />
                                    <label htmlFor="status" className="form__label">Status</label>
                                </div>


                                <div className="form__group">
                                    <button className="btn btn--green">Submit &rarr;</button>
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
    if (!formValues.status) {
        errors.status = 'status is required'
    } 
    return errors;
}
export default reduxForm({
    form: 'Modify Form',
    validate
})(Auth(Modify));
