import React from 'react'

const Confirmed = () => {
    return (
        <section className="section-stories">
            <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop>
                <source src="./img/video.mp4" type="video/mp4"/>
                    <source src="./img/video.webm" type="video/webm"/>
                        Your browser is not supported!
                </video>
            </div>
            <div className="u-center-text">
                <h2 className="heading-secondary">
                    Thank You for Touring with us<br/>
                    We make people genuinely happy
            </h2>
            </div>
        </section>
    )
}

export default Confirmed;
