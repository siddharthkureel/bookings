import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { firebase} from "../../firebase";
import Auth from "../HOC/Auth";
class Manage extends Component {
    state = {
        email:'',
        bookings:[]
    }
    componentDidMount=async()=>{
        let ho;
        if (this.props.user){
            let email = this.props.user.email;
            await firebase.database().ref('/booking').once('value').then(function (snapshot) {
                let bookings = [];
                snapshot.forEach((childSnapshot) => {
                    bookings.push({
                        ...childSnapshot.val(),
                        id: childSnapshot.key
                    })
                });
                let array = bookings.filter((booking)=>booking.logInEmail===email)
                ho = [...array]
                console.log(ho)
            });
        }
        this.setState({
            bookings:ho
        })
    }
    renderBookingList=()=>{
        if(!this.state.bookings){
            return <tr>
                <td>Loading</td>
                <td>Loading</td>
                <td>Loading</td>
                <td>Loading</td>
                <td>Loading</td>
                <td>Loading</td>
                <td>Loading</td>
            </tr>
        }else{
            return this.state.bookings.map((booking,i)=>(
            <tr key={i}>
                <td>{booking.firstName}&nbsp;{booking.lastName}</td>
                <td>{booking.email}</td>
                <td>{booking.bookingFor}</td>
                <td>{booking.dateFrom} to {booking.dateTo}</td>
                <td>${booking.price}</td>
                    <td><Link to={`/modify/${booking.id}`}>Modify</Link></td>
                <td>{booking.status}</td>
            </tr>
            ))
        }
    }
    render() {
        return (
            <div className="row" >
                <h2 className="heading-secondary u-margin-bottom-small">Manage Booking</h2>
                <table id="t01">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Package</th>
                            <th>Dates</th>
                            <th>Price</th>
                            <th>Modify</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.renderBookingList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Auth(Manage);