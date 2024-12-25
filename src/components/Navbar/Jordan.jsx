import React from 'react'
import Slider from '../Slider/Slider'
import API from '../../services/shoeAPI'
import Productdetails from '../Productdetails/Productdetails'
import Features from '../Features/Features'

const Jordan = () => {

    const airJorderData = API.filter(item => item.title === "Air Jordan")
    return (
        <div>
            <Slider data={airJorderData} />
            <Features />
            <Productdetails data={airJorderData} />
        </div>
    )
}

export default Jordan
