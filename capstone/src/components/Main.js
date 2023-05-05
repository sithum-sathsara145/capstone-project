import { Route,Routes } from "react-router-dom"
import React from "react"
import Home from "./Home"
import Reservations from "./Reservations"
import Menu from "./Menu"
import About from "./About"



function Main() {
    const updateTimes = (availableTimes) => {
        return availableTimes
    };
    const initializeTimes = ['17:00', '18:00','19:00','20:00'];
    const [availableTimes,dispatch] = React.useReducer(updateTimes, initializeTimes)
    return (
    <main>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Reservations" element={<Reservations availableTimes={availableTimes} dispatch={dispatch}/>}/>
            <Route path="/Menu" element={<Menu/>}/>
            <Route path="/About" element={<About/>}/>
        </Routes>



    </main>
    )
}

export default Main