import resturant from "../images/icons_assets/restaurant.jpg"
import chef from "../images/icons_assets/restaurant chef B.jpg"
function About(){
    return(
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
    )
}
export default About