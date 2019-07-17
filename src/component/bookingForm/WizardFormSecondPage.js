import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const renderError = ({ meta: { touched, error } }) =>
    touched && error ? <span>{error}</span> : false

const WizardFormSecondPage = props => {
    const { handleSubmit, previousPage } = props
    return (
        <section className="section-book">
            <div className="row" style={{ maxWidth: '100%' }}>
                <div className="book">
                    <div className="book__form">
                        <form onSubmit={handleSubmit} className="form">
                            <div className="u-margin-bottom-medium">
                            <h2 className="heading-secondary">Book</h2>
                            </div>
                            <div className="form__group">
                                <Field 
                                id="email"
                                classNameInput="form__input"
                                classNameLabel="form__label"
                                name="email" 
                                type="email" 
                                component={renderField} 
                                label="Email" 
                                />
                            </div>
                            <div className="form__group">
                            <Field
                                id="phone"
                                classNameInput="form__input"
                                classNameLabel="form__label"
                                name="phone"
                                type="text"
                                component={renderField}
                                label="Phone"
                            />
                            </div>
                            <div className="form__group">
                                <span style={{ fontSize:'1.5rem' }} >Number of People</span>
                                <label className="navigation__radio-label" >
                                <Field
                                    name="group"
                                    component="input"
                                    type="radio"
                                    value="3-6"
                                />{''}3-6
                                </label>
                                <label className="navigation__radio-label">
                                <Field
                                    name="group"
                                    component="input"
                                    type="radio"
                                    value="6-8"
                                />{''}6-8
                                </label>
                                <label className="navigation__radio-label">
                                <Field
                                    name="group"
                                    component="input"
                                    type="radio"
                                    value="8-12"
                                />{''}8-12
                                </label>
                                <Field name="group" component={renderError} />
                            </div>
                            <div className="form__group">
                                <button type="button" className="btn btn--green" onClick={previousPage}> Previous</button>
                                <button type="submit" className="btn btn--green">Next &rarr;</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
       
    )
}

export default reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
})(WizardFormSecondPage)