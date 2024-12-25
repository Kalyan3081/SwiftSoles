import React from 'react'
import API from '../../services/shoeAPI'
import Slider from '../Slider/Slider'
import Productdetails from '../Productdetails/productdetails'
import Features from '../Features/Features'

const Hippie = () => {
    const hippieData = API.filter(item => item.title === "Hippie")
    return (
        <div>
            <Slider data={hippieData} />
            <Features />
            <Productdetails data={hippieData} />
        </div>
    )
}

export default Hippie
