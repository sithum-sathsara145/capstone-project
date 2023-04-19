import heroImage from "../images/icons_assets/restauranfood.jpg"
function Hero(){
    return (
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
    )
}
export default Hero