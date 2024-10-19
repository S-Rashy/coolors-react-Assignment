import "./Users.css"
const Users = (props) => {
    return ( 
        <div className="userImg"> 
            <img src={props.Img} alt="" />
        </div>
     );
}
 
export default Users;