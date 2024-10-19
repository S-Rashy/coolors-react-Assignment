import Header from "../static/Header/Header";
import Hero from "../components/Hero/Hero";
import MidApps from "../components/MidApps/MidApps";
import Users from "../components/Users/Users";
import Footer from "../static/Footer/Footer";
import Last from "../static/Last/Last";


import IosImg from "../assets/apple-black-logo.svg"
import AndroidImg from "../assets/android-logo-svgrepo-com.svg"
import FigmaImg from "../assets/figma-svgrepo-com.svg"
import ChromeImg from "../assets/chrome-svgrepo-com.svg"
import AdobeImg from "../assets/adobe-svgrepo-com.svg"

import Disney from "../assets/disney.svg"
import Dreamworks from "../assets/dreamworks.svg"
import Warner from "../assets/warner-bros.svg"
import Netflix from "../assets/netflix.svg"
import AirBnB from "../assets/airbnb.svg"
import Dropbox from "../assets/dropbox.svg"
import Hasbro from "../assets/hasbro.png"
import Ubisoft from "../assets/ubisoft.svg"
import EA from "../assets/ea.svg"
import Apple from "../assets/apple.svg"
import Windows from "../assets/windows.png"
import "./Home.css"

const Home = () => {
    return ( 
        <div>
        <Header/>
        <Hero/>
    
        <div className="heroApps">
          <MidApps Name="ios" Img={IosImg} Title="iOS App" Text="Create, browse and save palettes on the go." Text2="View on the App Store"/>
          <MidApps Name="android" Img={AndroidImg} Title="Android App" Text="Thousands of palettes in your pocket." Text2="View on the Play Store"/>
          <MidApps Name="figma" Img={FigmaImg} Title="Figma Plugin" Text="All Palettes right in your workspace." Text2="Install Now"/>
          <MidApps Name="chrome" Img={ChromeImg} Title="Chrome Extension" Text="Get and edit a palette every new tab." Text2="Add to Chrome"/>
          <MidApps Name="adobe" Img={AdobeImg} Title="Adobe Extension" Text="Use Coolors with your favorite tools" Text2="Download"/>
    
        </div>

        
        <p id="user">Used by 5+ million designers and by top companies </p>


        <div className="users">
            <Users Img={Disney}/>
            <Users Img={Dreamworks}/>
            <Users Img={Warner}/>
            <Users Img={Netflix}/>
            <Users Img={AirBnB}/>
            <Users Img={Dropbox}/>
            <Users Img={Hasbro}/>
            <Users Img={Ubisoft}/>
            <Users Img={EA}/>
            <Users Img={Apple}/>
            <Users Img={Windows}/>
        </div>

        <Footer/>
        <Last/>
      </div>
     );
}
 
export default Home;