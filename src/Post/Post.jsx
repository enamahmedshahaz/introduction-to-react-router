import { Link, useNavigate } from "react-router-dom";


const Post = ({ post }) => {

    const { id, title, body } = post;

    const navigate =  useNavigate();

    const postStyle = {
        border: '1px solid yellow',
        borderRadius: '10px',
        padding: '10px'
    }

    const handleViewPostDetails = () =>{
        navigate(`/post/${id}`);
    }

    return (
        <div  style={postStyle}>
            <h3>{title}</h3>
            <p>{body}</p>
            <Link to={`/post/${id}`}>View Post Details - Using Link Component</Link> <br /> <br />
            <Link to={`/post/${id}`}> <button>View Post Details</button></Link> <br /> <br />
            <button onClick={handleViewPostDetails}>View Post Details - Using Btn</button> 
        </div>
    );
};

export default Post;