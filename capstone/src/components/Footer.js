import logoFooter from "../images/icons_assets/logo_footer.png"
import facebook from "../images/icons_assets/facebook.png"
import instagram from "../images/icons_assets/instagram.png"
import linkedin from "../images/icons_assets/linkedin.png"
function Footer() {
    return (
    <footer>
        <img src={logoFooter} alt="logo Footer"/>
        <div className="doormat_nav">
            <h3>Links</h3>
        <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#Menu">Menu</a></li>
            <li><a href="#Resevations">Reservations</a></li>
            <li><a href="#OrderOnline">Order Online</a></li>
            <li><a href="#Login">Login</a></li>
        </ul>
        </div>
        <div className="contact">
            <h3>contact</h3>
            <h4>address</h4>
            <h4>Phone Number</h4>
            <h4>E-mail</h4>
        </div>
        <div className="social-media">
            <h2>social media</h2>
            <img src={facebook} alt="facebook"/>
            <img src={instagram} alt="instagram"/>
            <img src={linkedin} alt="linkedin"/>
        </div>
    </footer>
    )
}

export default Footer