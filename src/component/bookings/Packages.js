import React from 'react';
import Cards from './Cards';
const Packages = () => {
    return (
        <section className="section-tours" id="section-tours">
            <div className="u-center-text ">
                <h2 className="heading-secondary">
                    Most popular tours
                    </h2>
            </div>

            <div className="row">
                <Cards
                    heading="The Sea Explorer" offer1="3 day tours" offer2= "timings will be specified"
                    offer3="2 tour guides" offer4="Sleep in cozy hotels" offer5="Difficulty: easy"
                    price="297" serial='1' link="sea"
                />
                <Cards
                    heading="The Forest Hiker" offer1="7 day tours" offer2="timings will be specified"
                    offer3="6 tour guides" offer4="Sleep in provided tents" offer5="Difficulty: medium"
                    price="497" serial='2' link="forest"
                />
                <Cards
                    heading="The Snow Adventurer" offer1="5 day tours" offer2="timings will be specified"
                    offer3="3 tour guides" offer4="Sleep in provided tents" offer5="Difficulty: hard"
                    price="897" serial='3' link="snow"
                />
                
            </div>

        </section>
    )
}

export default Packages;
