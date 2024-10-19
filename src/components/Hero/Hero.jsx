import "./Hero.css"
import Button from "../reuseables/Button"
import Trophy from "../../assets/trophy-svgrepo-com.svg"
import HeroImg from "../../assets/hero-coolors.png"

const Hero = () => {
    return ( <div className="hero">
    <div className="heroLeft">
        <h1> The Super fast color palettes generator! </h1>
        <p>Create the perfect palette or get inspired by thousands of beautiful color schemes.</p>

        <div className="heroBtn">
            <Button Text="Start the generator!" btnClass="btnStart"/>
            <Button Text="Explore trending palettes" btnClass="btnExplore"/>

        </div>

        <div className="product">
            <img src={Trophy} alt="trophy" />

            <div id="pHunt">
                <p>PRODUCT HUNT</p>
                <h3>#1 Product of the Month</h3>
            </div>
        </div>

    </div>

    <img src={HeroImg} alt="hero image" id="heroImg" />
    </div> );
}
 
export default Hero;