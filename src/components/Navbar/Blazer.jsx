import React from 'react'
import API from '../../services/shoeAPI'
import Slider from '../Slider/Slider'
import Productdetails from '../Productdetails/productdetails'
import Features from '../Features/Features'

const Blazer = () => {

    const blazerData = API.filter(item => item.title === "Blazer")
    return (
        <div>
            <Slider data={blazerData} />
            <Features />
            <Productdetails data={blazerData} />

        </div>
    )
}

export default Blazer
