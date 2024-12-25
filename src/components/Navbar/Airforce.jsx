import React, { useState } from 'react'
import Slider from '../Slider/Slider'
import Navbar from './Navbar'
import API from '../../services/shoeAPI'
import Productdetails from '../Productdetails/productdetails'
import Features from '../Features/Features'

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
