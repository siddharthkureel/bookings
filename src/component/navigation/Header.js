import React from 'react';
import { Link } from "react-router-dom";
import { firebase } from '../../firebase';
const Header = (props) => {
    const bindClick = ()=>{
        document.getElementById('navi-toggle').checked=false;
    }
    const logout = () =>{
        firebase.auth().signOut()
    }
    const renderLinks = () =>{
     if(props.user){
         return (
             <>
             <li className="navigation__item" >
                 <Link to='/signin' onClick={logout} className="navigation__link" style={{ cursor:'pointer' }} >
                 Logout
             </Link>
             </li>
             <li onClick={bindClick} className="navigation__item"><Link to='/manage' className="navigation__link">Manage Booking</Link></li>
             </>
             )
     }else{
         return(
             <>
             <li onClick={bindClick} className="navigation__item"><Link to='/register' className="navigation__link">Register</Link></li>
             <li onClick={bindClick} className="navigation__item"><Link to='/signin' className="navigation__link">Sign In</Link></li>
             </>
         )
     }
    }
    return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>

                <label id="nav-close-btn" htmlFor="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label>

                <div className="navigation__background">&nbsp;</div>

                <nav className="navigation__nav">
                <ul id="navigation__list" className="navigation__list"> 
                        <li className="navigation__item">
                        {!props.user ?
                            null :
                            <span className="navigation__user" >
                                {props.user.email}
                            </span>
                        }
                        </li>                       
                    <li onClick={bindClick} className="navigation__item"><Link to='/' className="navigation__link">&nbsp;Home&nbsp;</Link></li>
                    <li onClick={bindClick} className="navigation__item"><Link to='/about' className="navigation__link">&nbsp;About&nbsp;</Link></li>
                        {renderLinks()
                        }
                        <li onClick={bindClick} className="navigation__item"><Link to='/packages' className="navigation__link">Book now</Link></li>
                    </ul>
                </nav>
        </div>
    )
}

export default (Header);
