import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {

    const post = useLoaderData();
    const navigate = useNavigate();

    const { postId } = useParams();

    console.log(`post id: ${postId}`);

    const { id, title, body } = post;

    const handleGoHome = () => {
        navigate('/');
    }

    return (
        <div style={{ margin: 'auto 250px' }}>
            <h3>Details of the post with id: {id}</h3>
            <hr />
            <h4>Post Title: {title}</h4>
            <p>Post Body: {body}</p>
            <button onClick={() => navigate(-1)}>Go back</button> <br /> <br />
            <button onClick={handleGoHome}>Go Home</button>

        </div>
    );
};

export default PostDetails;