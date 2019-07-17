import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Cards extends Component {
render() {
    return (
        <div className="col-1-of-3">
            <div className="card">
                <div className="card__side card__side--front">
                    <div className={`card__picture card__picture--${this.props.serial}`}>
                        &nbsp;
                                </div>
                    <h4 className="card__heading">
                        <span className={`card__heading-span card__heading-span--${this.props.serial}`}>{this.props.heading}</span>
                    </h4>
                    <div className="card__details">
                        <ul>
                            <li>{this.props.offer1}</li>
                            <li>{this.props.offer2}</li>
                            <li>{this.props.offer3}</li>
                            <li>{this.props.offer4}</li>
                            <li>{this.props.offer5}</li>
                        </ul>
                    </div>
                </div>
                <div className={`card__side card__side--back card__side--back-${this.props.serial}`}>
                    <div className="card__cta">
                        <div className="card__price-box">
                            <p className="card__price-only">Only</p>
                            <p className="card__price-value">${this.props.price}</p>
                        </div>
                        <Link to={`/booking/${this.props.link}-${this.props.price}`} className="btn btn--white">Book now!</Link>
                    </div>

                </div>
            </div>
        </div>

        )
    }
}
export default Cards;