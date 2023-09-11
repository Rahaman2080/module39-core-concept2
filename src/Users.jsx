import { useEffect, useState } from "react";
import User from "./User";
import './Users.css'

export default function Users(){
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    return (
        <div className="box">
            <h3>Users: {users.length}</h3>
        {
            users.map(user => <User user={user}></User>)
        }
        </div>
    )
}
/**
 * 1. declare a state to hold the data
 * 2.set useEffect with call back and dependency array
 * 3. use  feth to load data
 * 4. loaded data have to set in state function
 */