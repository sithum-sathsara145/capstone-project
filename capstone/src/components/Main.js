import heroImage from "../images/icons_assets/restauranfood.jpg"
import lemonDessert from "../images/icons_assets/lemon dessert.jpg"
import GreekSalad from "../images/icons_assets/greek salad.jpg"
import Bruchetta from "../images/icons_assets/bruchetta.svg"
import star from "../images/icons_assets/star.png"
import resturant from "../images/icons_assets/restaurant.jpg"
import chef from "../images/icons_assets/restaurant chef B.jpg"

function Main() {
    return (
    <main>
        <div className="hero">
            <div className="hero-content">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                </p>
                <button>Reserve a table</button>
            </div>
            <img src={heroImage} alt="hero"/>
        </div>
        <div className="highlights">
            <h2>Specials</h2>
            <button>Online Menu</button>
            <div className="card-section">
                <div className="card">
                    <img src={lemonDessert} alt="lemon dessert"/>
                    <div className="card-content">
                        <h3>Lemon dessert</h3>
                        <h4>$ 5.00</h4>
                        <p>
                         This comes straight from grandma’s recipe book, every last ingredient has 
                          been sourced and is as authentic as can be imagined.
                        </p>
                        <h3 className="order">Order a Delivery</h3>
                    </div>
                </div>
                <div className="card">
                    <img src={GreekSalad} alt="Greek Salad"/>
                    <div className="card-content">
                        <h3>greek Salad</h3>
                        <h4>$ 12.00</h4>
                        <p>
                        The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, 
                        garnished with crunchy garlic and rosemary croutons.
                        </p>
                        <h3 className="order">Order a Delivery</h3>
                    </div>
                </div>
                <div className="card">
                    <img src={Bruchetta} alt="Bruchetta"/>
                    <div className="card-content">
                        <h3>Bruchetta</h3>
                        <h4>$ 5.99</h4>
                        <p>
                        Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned 
                        with salt and olive oil.
                        </p>
                        <h3 className="order">Order a Delivery</h3>
                    </div>
                </div>
            </div>
        </div>
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
        <div className="about">
            <div className="about-text">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                    Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. 
                </p>
            </div>
            <div className="about-image">
                <img src={resturant} alt="resturent"/>
                <img src={chef} alt="chef"/>
            </div>
        </div>
    </main>
    )
}

export default Main