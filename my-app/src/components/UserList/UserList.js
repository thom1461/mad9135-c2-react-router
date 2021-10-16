import { useState, useEffect } from 'react';
import UserDetails from '../UserDetails/UserDetails';
import { Route, NavLink } from 'react-router-dom';
import './userList.css';

export default function UserList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        (async function () {
            let url = `https://randomuser.me/api/?results=25&seed=thom1461&format=json&nat=ca`;
            let resp = await fetch(url);
            let data = await resp.json();
            setList(data.results);
        })();
    }, []);

    // function findUser(id) {
    //     let fu = list.find((item, index) => parseInt(id) === index + 1);
    //     console.log("User ID:", fu);
    //     return list.find((item, index) => parseInt(id) === index + 1);
    // }

    return (
        <div className="userList">
            <h2> User list</h2>
            {list.length === 0 && <p>Loading...</p>}
            <div className="user-list">
            {list.map((item, index) => (
                <div className="person">
                    <img src={item.picture.medium} alt={item.name.last} />
                    <div className="info">
                        <h3 className="userName" key={item.name.last}>
                            {item.name.first} {item.name.last}
                        </h3>
                        <p className="userEmail" key={item.email}>
                            {item.email}
                        </p>
                        <p className="userCell" key={item.cell}>
                            {item.cell} 
                        </p>
                        <NavLink to={`/userList/${index + 1}`}>
                            More Details
                        </NavLink>
                    </div>
                </div>
                ))}
            </div>

            <div className="user-details">
                <Route path="/userList/:id">
                    <UserDetails list={list}/>
                </Route>
            </div>
        </div>
    );
}
