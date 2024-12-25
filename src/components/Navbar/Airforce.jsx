import React, { useState } from 'react'
import Slider from '../Slider/Slider'
import API from '../../services/shoeAPI'
import Features from '../Features/Features'
import Productdetails from '../Productdetails/Productdetails'

const Airforce = () => {

    const airforceData = API.filter(item => item.title === "Air Force");

    return (
        <div>
            <Slider data={airforceData} />
            <Features />
            <Productdetails data={airforceData} />
        </div>
    );


}

export default Airforce
