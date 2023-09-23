import { useLoaderData, useNavigate } from "react-router-dom";


const UserDetails = () => {

    const user = useLoaderData();
    const navigate = useNavigate(); //hook

    const { id, name, phone, website } = user;

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <h3>Details of the user with id: {id}</h3>
            <hr />
            <h4>User name: {name}</h4>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <button onClick={handleGoBack}> Go back </button>
        </div>
    );
};

export default UserDetails;