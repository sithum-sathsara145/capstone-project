import lemonDessert from "../images/icons_assets/lemon dessert.jpg"
import GreekSalad from "../images/icons_assets/greek salad.jpg"
import Bruchetta from "../images/icons_assets/bruchetta.svg"
function Menu(){
    return(
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
    )
}
export default Menu