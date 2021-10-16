import { useParams } from 'react-router-dom';
//import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

//export default function UserDetails({ findUser }) {
export default function UserDetails({ list }) {
    //const [userDetails, setUser] = useState(null);
    let { id } = useParams();
    //console.log("List: ", list);
    let userDetails = list.find((item, index) => parseInt(id) === index + 1);
    
    // useEffect(() => {
    //     setUser(findUser(id));
    // }, [findUser, id]);

    return (
        <div>
            <h3>{userDetails.name.first} {userDetails.name.last}</h3>
            <img src={userDetails.picture.large} alt={userDetails.name.last}/>
            <h3>Address</h3>
            <div>
                <p>{userDetails.location.street.number} {userDetails.location.street.name}, {userDetails.location.city}, {userDetails.location.state}, {userDetails.location.postcode}</p>
            </div>
            <h3>Login information</h3>
            <div>
                <p>uuid {userDetails.login.uuid}</p>
                <p>Username {userDetails.login.username}</p>
                <p>Password {userDetails.login.password}</p>
            </div>
        </div>
    );
}

UserDetails.propTypes = {
    findUser: PropTypes.func.isRequired,
};
