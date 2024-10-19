import Twitter from "../../assets/twitter.svg"
import Facebook from "../../assets/facebook.svg"
import Pinterest from "../../assets/pinterest.svg"
import Instagram from "../../assets/instagram-svgrepo-com.svg"
import Producthunt from "../../assets/producthunt.svg"

import "./Last.css"

const Last = () => {
    return ( <div className="last">
        <p>©️ Coolors by <b>Rash</b>. From a creative to all the others</p>

        <div className="logoLast">  
            <img src={Twitter} alt="twitter" />
            <img src={Facebook} alt="facebook" />
            <img src={Pinterest} alt="pinterest" />
            <img src={Instagram} alt="instagram" />
            <img src={Producthunt} alt="producthunt" />
            
        </div> 
    </div> );
}
 
export default Last;