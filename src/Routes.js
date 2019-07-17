import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Packages from './component/bookings/Packages';
import Home from "./component/account/Home";
import Register from './component/account/Register';
import Signin from "./component/account/Signin";
import Booking from './component/bookings/Booking';
import Confirmed from './component/bookings/Confirmed';
import About from './component/account/About';
import Manage from './component/bookings/Manage';
import Modify from './component/bookings/Modify';
const Routes = (props) => {
  return (
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/booking/:key" component={Booking} />
        <Route exact path="/packages" component={Packages} />
        <Route exact path="/confirmed" component={Confirmed} />
        <Route exact path="/modify/:key" component={Modify} />
        <Route exact path="/manage" render={()=><Manage {...props}  />}/>
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
      </Switch>
  )
}

export default Routes;
