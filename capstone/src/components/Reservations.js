import React from "react"

function Reservations({availableTimes, dispatch , submitForm}){

    console.log(dispatch)
    let today = new Date().toISOString().split("T")[0];
    const [formData, setFormData] = React.useState({
        date: {today},
        time: "00:00",
        noOfGuests: "1",
        occasion: "Birthday"
    })

    const handleFormChange = (event) => {
      const { name, value } = event.target
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }))
    }
    console.log(formData.date)
    const handleDateChange = async (event) => {
      const { name, value } = event.target
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }))
     dispatch({ type: 'UPDATE_TIMES', payload: value })
     return
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      submitForm(formData)
    }


    const timeslots = availableTimes?.map(time => <option key={time}>{time}</option>)
    return(
        <div className="reserve">
            <h1 style={{textAlign: "center"}}>
                Welcome to Table Reservation system on Little lemon
            </h1>
            <form>
                <label htmlFor="res-date">Choose Date</label>
                <input type="date" id="res-date" name="res-date" value={formData.date} onChange={handleDateChange} min={today} placeholder={formData.date}/>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time " value={formData.time} onChange={handleFormChange}>
                {timeslots}
                </select>
                <label htmlFor="noguests">No of Guests</label>
                <input
                type="number"
                id="noguests"
                name="noguests"
                min={1} max={10}
                value={formData.guests}
                onChange={handleFormChange}/>
                <label htmlFor="occasion">Occasion</label>
                <select
                id="occasion"
                name="occasion"
                value={formData.occasion}
                onChange={handleFormChange}>
                    <option>Annivesary</option>
                    <option>Birth day</option>
                </select>
                <button id="submitbtn" type="submit" onClick={handleSubmit} data-testid="submitbtn">Make a Reservation</button>
            </form>
        </div>
    )
}

export default  Reservations;
