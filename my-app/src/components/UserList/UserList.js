import { useState, useEffect } from 'react';
import UserDetails from '../UserDetails/UserDetails';
import { Route, NavLink } from 'react-router-dom';
import './userList.css';

export default function UserList(props) {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetchData('not_used_yet');
    }, []);

    async function fetchData(type) {
        let url = `https://randomuser.me/api/?results=25&seed=thom1461&format=json&nat=ca`;
        let resp = await fetch(url);
        let data = await resp.json();
        setList(data.results);
    }

    function findUser(id) {
        return list.find((item, index) => parseInt(id) === index + 1);
    }

    return (
        <div className="userList">
            {list.length === 0 && <p>Loading...</p>}
            <div className="user-list">
            {list.map((item, index) => (
                <div>
                    <p className="userName" key={item.name.last}>
                        {item.name.first} {item.name.last}
                    </p>
                    <p className="userEmail" key={item.email}>
                        {item.email}
                    </p>
                    <p className="userCell" key={item.cell}>
                        {item.cell}
                        <NavLink to={`/userDetails/${index + 1}`}>Learn More</NavLink>
                    </p>
                    <img src={item.picture.thumbnail} alt={item.name.last}/>
                </div>
                ))}
            </div>

            <div className="user-details">
                <Route path="/userDetails/:id">
                    <UserDetails findPerson={findUser} />
                </Route>
            </div>
        </div>
    );
}
