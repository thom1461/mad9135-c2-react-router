import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
export default function UserDetails({ findUser }) {
    const [userDetails, setUser] = useState(null);
    let { id } = useParams();

    useEffect(() => {
        setUser(findUser(id));
    }, [findUser, id]);

    return (
        <div>
            <p>The details about User {id}</p>
            {/* <img src={userDetails.picture.large} alt={userDetails.name.last}/> */}
            <h3>Address</h3>
            {/* <div>
                <p>{userDetails.location.street}, {userDetails.location.city}, {userDetails.location.state}, {userDetails.location.postcode}</p>
            </div> */}
            <h3>Login information</h3>
            {/* <div>
                <p>uuid {userDetails.login.uuid}</p>
                <p>Username {userDetails.login.username}</p>
                <p>Password {userDetails.login.password}</p>
            </div> */}
        </div>
    );
}

UserDetails.propTypes = {
    findUser: PropTypes.func.isRequired,
};
