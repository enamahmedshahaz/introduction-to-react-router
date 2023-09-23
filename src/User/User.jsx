
import { Link } from 'react-router-dom';

const User = ({user}) => {

    const {name , id , email } = user;

    const userStyle = {
        border: '1px solid green',
        padding: '10px',
        borderRadius: '20px',
    }

    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <Link to={`/user/${id}`}> <button>Show Details</button> </Link>
        </div>
    );
};

export default User;