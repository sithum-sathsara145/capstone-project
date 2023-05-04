import Hero from "./Hero"
import Menu from "./Menu"
import About from "./About"
import Testimonials from "./Testimony"


export default function Home(){
    return(
        <>
        <Hero/>
        <Menu />
        <Testimonials />
        <About />
        </>
    )
}