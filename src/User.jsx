
import './Users.css'
export default function User({user}){
    const {name, email, id, address}= user;
    console.log(user);
    return (
        <div className="box">
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <p>Id: {id}</p>
            <p>Address: {address.city}</p>
        </div>
        
    )
}