import React from "react"

function Reservations({availableTimes, dispatch , submitForm}){

    console.log(dispatch)
    let today = new Date().toISOString().split("T")[0];
    const [formData, setFormData] = React.useState({
        date: new Date().toISOString().split("T")[0],
        time: 'select time',
        noOfGuests: "1",
        occasion: "select occasion"
    })
    console.log(formData)
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
    const getIsFormValid = () => {
        return (
            formData.date &&
            formData.time !== 'select time'&&
            formData.noOfGuests >=1 &&
            formData.occasion !== "select occasion"
        );
      };
      console.log(getIsFormValid())
      console.log()

    const timeslots = availableTimes?.map(time => <option key={time}>{time}</option>)
    return(
        <div className="reserve">
            <h1 style={{textAlign: "center"}}>
                Welcome to Table Reservation system on Little lemon
            </h1>
            <form>
                <label htmlFor="date">Choose Date</label>
                <input type="date" id="date" name="date" value={formData.date} onChange={handleDateChange} min={today} valid={formData.date} />
                <label htmlFor="time">Choose time</label>
                <select name="time" id="time " value={formData.time} onChange={handleFormChange}>
                  <option>select time</option>
                {timeslots}
                </select>
                <label htmlFor="noOfGuests">No of Guests</label>
                <input
                type="number"
                id="noOfGuests"
                name="noOfGuests"
                min={1} max={10}
                value={formData.noOfGuests}
                onChange={handleFormChange}/>
                <label htmlFor="occasion">Occasion</label>
                <select
                id="occasion"
                name="occasion"
                value={formData.occasion}
                onChange={handleFormChange}>
                    <option value="select occasion">select occasion</option>
                    <option value="Annivesary">Annivesary</option>
                    <option value="Birth day">Birth day</option>
                </select>
                <button
                 id="submitbtn"
                type="submit"
                onClick={handleSubmit}
                data-testid="submitbtn"
                disabled={!getIsFormValid()}
                aria-label="submit button"
                >
                  <span className="tooltiptext">
                    Button disabled
                  </span>
                  Make a Reservation
                </button>
            </form>
        </div>
    )
}

export default  Reservations;
