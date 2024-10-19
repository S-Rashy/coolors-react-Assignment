import "./MidApps.css"

const MidApps = (props) => {
    return ( <div className={`midApps ${props.Name}`}>
        <img src={props.Img} alt={`${props.Title}`} />
        <h3>{props.Title}</h3>
        <p>{props.Text}</p>

        <div className="text2">
            <h2>{props.Text2}</h2>
        </div>
    </div> );
}
 
export default MidApps;