import { Route,Routes, useNavigate } from "react-router-dom"
import React from "react"
import Home from "./Home"
import Reservations from "./Reservations"
import Menu from "./Menu"
import About from "./About"
import { fetchAPI, submitAPI } from "../Api"
import Confirmed from "./confirmed"





function Main() {
    const [date, setDate] = React.useState(new Date())

  function initializeTimes(date) {
    return fetchAPI(date)
    }

  function updateTimes(date) {
    const dateObj = new Date(date)
    return fetchAPI(dateObj)
  }

  const navigate = useNavigate();

  function submitForm(formData) {
    const isSubmitted = submitAPI(formData);

    if (isSubmitted) {
      navigate("/confirmed");
    }
  }

  function reducer(state, action) {
    let newState
    switch (action.type) {
      case 'UPDATE_TIMES':
      const newDate = new Date(action.payload);
      newState = updateTimes(newDate)
      break;

      default:
        throw new Error()
    }
    return newState
  }

  const [availableTimes, dispatch] = React.useReducer(reducer, initializeTimes(date))
return (
    <main>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Reservations" element={<Reservations availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/> }/>
            <Route path="/Menu" element={<Menu/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Confirmed" element={<Confirmed/>}/>
        </Routes>



    </main>
    )
}

export default Main