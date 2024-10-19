import "./Button.css"
const Button = (props) => {
    return ( <button className={`btn ${props.btnClass}`}> {props.Text}</button> );
}
 
export default Button;