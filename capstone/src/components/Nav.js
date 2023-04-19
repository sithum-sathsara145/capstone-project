import {Link} from "react-router-dom"
function Nav() {
    return (
    <nav>
        <ul>
            <li><Link to="/"> Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Menu">Menu</Link></li>
            <li><Link to="/Reservations">Reservations</Link></li>
            <li><Link to="/OrderOnline">Order Online</Link></li>
            <li><Link to="/Login">Login</Link></li>
        </ul>
    </nav>
    )
}

export default Nav