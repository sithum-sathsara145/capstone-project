import { Route,Routes } from "react-router-dom"
import Home from "./Home"
import Reservations from "./Reservations"
import Menu from "./Menu"
import About from "./About"



function Main() {
    return (
    <main>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Reservations" element={<Reservations/>}/>
            <Route path="/Menu" element={<Menu/>}/>
            <Route path="/About" element={<About/>}/>
        </Routes>



    </main>
    )
}

export default Main