import logo from "../../assets/logo.svg"
import Button from "../../components/reuseables/Button"
import "./Header.css"

const Header = () => {
    return ( <nav>
        <img src={logo}  alt="logo" />

        <div className="navright">

            <div className="navOne">
                <a href="" id="tools">Tools</a>
                <a href="" id="goPro">Go Pro</a>
            </div>
            
            <a href="" id="signIn"> Sign in</a>
            <Button Text="Sign up" btnClass="btnSign"/>
        </div>

    </nav> );
}
 
export default Header;