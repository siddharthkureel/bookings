import React from 'react'
import WizardForm from "../bookingForm/WizardForm";
import { firebaseBooking,firebase } from "../../firebase";
import Auth from "../HOC/Auth";
import history from "../../history";
const booking = (props) => {   
    const showResults = (values)=>{
        let a = values.bookingFor.split('-')
        values.price = a[1]
        try {
            firebase.auth().onAuthStateChanged((user)=>{
                values.logInEmail=user.email
                values.status='confirmed'
                firebaseBooking.push(values)
                history.push('/confirmed')
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <WizardForm booking={props.match.params.key} onSubmit={showResults} />
        </div>
    )
}

export default Auth(booking);
