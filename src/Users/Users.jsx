import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css';

const Users = () => {

    const users = useLoaderData();

    return (
        <div>
            <h3>Our awesome users: {users.length}</h3>
            <div className="users-container">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
            
        </div>
    );
};

export default Users;