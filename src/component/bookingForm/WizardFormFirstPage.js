import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const WizardFormFirstPage = props => {
    const { handleSubmit } = props
    return (
        <section className="section-book">
        <div className="row" style={{ maxWidth: '100%' }}>
        <div className="book">
            <div className="book__form">
                <form onSubmit={handleSubmit} className="form">
                        <div className="u-margin-bottom-medium">

                            <h2 className="heading-secondary">
                                Book
                            </h2>
                        </div>
                        <div className="form__group">
                       <Field
                            id="name" 
                            classNameInput="form__input" 
                            classNameLabel="form__label"
                            name="firstName"
                            type="text"
                            component={renderField}
                            label="First Name"
                        />
                        </div>
                        <div className="form__group">
                        <Field
                            id="lastName"
                            classNameInput="form__input" 
                            classNameLabel="form__label"
                            name="lastName"
                            type="text"
                            component={renderField}
                            label="Last Name"
                            />
                        </div>
                        <div className="form__group">
                        <Field
                            id="address"
                            classNameInput="form__input" 
                            classNameLabel="form__label"
                            name="address"
                            type="text"
                            component={renderField}
                            label="Address"
                        />
                        </div>
                        <div className="form__group">
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
    form: 'wizard', // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
})(WizardFormFirstPage)