import star from "../images/icons_assets/star.png"

function Testimonials(){
    return(
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
    )
}

export default Testimonials