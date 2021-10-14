import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function UserDetails({ findUser }) {
    const [person, setPerson] = useState(null);
    let { id } = useParams();

    useEffect(() => {
        setPerson(findUser(id));
    }, [findUser, id]);

    return (
        <div>
            <p>Address {person.address}</p>
            <p>Login information</p>
            <p>uuid {person.login.uuid}</p>
            <p>Username {person.login.username}</p>
            <p>Password {person.login.password}</p>
        </div>
    );
}

UserDetails.propTypes = {
    findUser: PropTypes.func.isRequired,
};
