import { Route,Routes } from "react-router-dom"
import Home from "./Home"
import Reservations from "./Reservations"
import Menu from "./Menu"
import About from "./About"
import star from "../images/icons_assets/star.png"


function Main() {
    return (
    <main>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Reservations" element={<Reservations/>}/>
            <Route path="/Menu" element={<Menu/>}/>
            <Route path="/About" element={<About/>}/>
        </Routes>

        <div className="testimonials">
            <h2>Testimonials</h2>
            <div className="testcard-section">
                <div className="testcard">
                    <h3>Rating</h3>
                    <h4>Name</h4>
                    <img src={star} alt="star"/>
                    <p>Review text</p>
                </div>
                <div className="testcard">
                    <h3>Rating</h3>
                    <h4>Name</h4>
                    <img src={star} alt="star"/>
                    <p>Review text</p>
                </div>
                <div className="testcard">
                    <h3>Rating</h3>
                    <h4>Name</h4>
                    <img src={star} alt="star"/>
                    <p>Review text</p>
                </div>
                <div className="testcard">
                    <h3>Rating</h3>
                    <h4>Name</h4>
                    <img src={star} alt="star"/>
                    <p>Review text</p>
                </div>
            </div>
        </div>

    </main>
    )
}

export default Main