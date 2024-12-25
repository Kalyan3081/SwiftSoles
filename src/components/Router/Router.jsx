import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from '../Navbar/Navbar'
import Airforce from '../Navbar/Airforce'
import Jordan from '../Navbar/Jordan'
import Blazer from '../Navbar/Blazer'
import Crater from '../Navbar/Crater'
import Hippie from '../Navbar/Hippie'


const Router = () => {
    return (
        <BrowserRouter>

            <Navbar />

            <Routes>
                <Route path='/Airforce' element={<Airforce />}>Airforce</Route>
                <Route path='/Jordan' element={<Jordan />}>Jordan</Route>
                <Route path='/Blazer' element={<Blazer />}>Blazer</Route>
                <Route path='/Crater' element={<Crater />}>Crater</Route>
                <Route path='/Hippie' element={<Hippie />}>Hippie</Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
