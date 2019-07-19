import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderDatePicker from './renderDatePicker';
import { date } from 'redux-form-validators';
const values = ['sea-297','forest-497','snow-897']

const renderColorSelector = ({ input, meta: { touched, error }, bookedKey }) => {
    let colors = values.filter(value=>value!==bookedKey)
    return(
    <div>
            <select className="form__input" {...input}>
                <option className="form__input" value={bookedKey}>{bookedKey}</option>
            {colors.map(val => (
                <option className="form__input" value={val} key={val}>
                    {val}
                </option>
            ))}
        </select>
        {touched && error && <span>{error}</span>}
    </div>
)}

const WizardFormThirdPage = props => {
    const { handleSubmit, pristine, previousPage, submitting, booking } = props
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
                                <label className="form__label">Booking For</label>
                                <Field  name="bookingFor" bookedKey={booking} component={renderColorSelector} />
                            </div>
                            <div className="form__group">
                                <label className="form__label">Date </label>
                                <Field 
                                    classNameInput="form__input" 
                                    id="date" 
                                    name="dateFrom" 
                                    component={renderDatePicker} 
                                  />
                            </div>
                            <div className="form__group">
                                <button type="button" className="btn btn--green" onClick={previousPage}>Previous</button>
                                <button type="submit" className="btn btn--green" disabled={pristine || submitting}> Submit</button>
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
})(WizardFormThirdPage)
