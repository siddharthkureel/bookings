import React from 'react';
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <header className="header">
            <div className="header__logo-box">
                <img src="./img/logo-white.svg" alt="Logo" className="header__logo" />
            </div>

            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Vacations</span>
                    <span className="heading-primary--sub">is where life touches you</span>
                </h1>

                <Link to="/about" className="btn btn--white btn--animated">Learn More</Link>
            </div>
        </header>
    )
}

export default Home
