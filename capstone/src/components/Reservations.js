import React from "react"

function Reservations(props){
    //let today = new Date()
    const [time,setTime]= React.useState('18:00');
    const [date,setDate] = React.useState();
    const [guests,setGuests] = React.useState('1')
    const [occasion,setOccasion] = React.useState()
    const eventhandler = (e)=>{
        e.preventDefault()
        alert('form submitted')
    }
    const handleDateChange = (e)=>{
        props.dispatch()
        return setDate(e.target.value)
    }
    //const  availableTimes = ["17:00",'18:00',"19:00","20:00",'21:00','22:00']
    const timeslots = props.availableTimes.map((times)=> {return <option>{times}</option>})
    return(
        <div className="reserve">
            <h1 style={{textAlign: "center"}}>
                Welcome to Table Reservation system on Little lemon
            </h1>
            <form>
                <label htmlFor="res-date">Choose Date</label>
                <input type="date" id="res-date" name="res-date" value={date} onChange={handleDateChange}/>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time " value={time} onChange={(e)=>{return setTime(e.target.value)}}>
                {timeslots}
                </select>
                <label htmlFor="noguests">No of Guests</label>
                <input
                type="number"
                id="noguests"
                name="noguests"
                min={1} max={10}
                value={guests}
                onChange={(e)=>{
                    return setGuests(e.target.value)
                }}/>
                <label htmlFor="occasion">Occasion</label>
                <select 
                id="occasion" 
                name="occasion" 
                value={occasion} 
                onChange={(e) => { return setOccasion(e.target.value)}}>
                    <option>Annivesary</option>
                    <option>Birth day</option>
                </select>
                <button type="submit" onClick={eventhandler}>make reservation</button>
            </form>
        </div>
    )
}

export default  Reservations;
