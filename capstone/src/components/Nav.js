import React from "react";
import {Link} from "react-router-dom"

function Nav() {
    //mobile navigation implementation
    const [toggle,setToggle]= React.useState('navbar__toggle');
    const [links,setLinks] = React.useState("navbar__menu")
    const eventhandler =()=>{
        if (toggle === "navbar__toggle"){
            setToggle('navbar__toggle is-active')
            setLinks('navbar__menu active')
        }
        if(toggle === 'navbar__toggle is-active'){
            setToggle('navbar__toggle')
            setLinks('navbar__menu')
        }
    }
    return (
    <nav >
        <div className={toggle} id="mobile-menu" onClick={eventhandler}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
        <ul className={links}>
            <li className="navbar__item"><Link to="/" className="navbar__links"> Home</Link></li>
            <li className="navbar__item"><Link to="/About" className="navbar__links">About</Link></li>
            <li className="navbar__item"><Link to="/Menu" className="navbar__links">Menu</Link></li>
            <li className="navbar__item"><Link to="/Reservations" className="navbar__links">Reservations</Link></li>
            <li className="navbar__item"><Link to="/OrderOnline" className="navbar__links">Order Online</Link></li>
            <li className="navbar__item"><Link to="/Login" className="navbar__links">Login</Link></li>
        </ul>
    </nav>
    )
}

export default Nav