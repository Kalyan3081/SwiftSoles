import React from 'react'
import API from '../../services/shoeAPI'
import Slider from '../Slider/Slider'
import Productdetails from '../Productdetails/Productdetails'
import Features from '../Features/Features'

const Crater = () => {
    const craterData = API.filter(item => item.title === "Crater")
    return (
        <div>
            <Slider data={craterData} />
            <Features />
            <Productdetails data={craterData} />
        </div>
    )
}

export default Crater
