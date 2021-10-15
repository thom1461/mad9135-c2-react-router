import { useState, useEffect } from 'react';
//import { Route, NavLink } from 'react-router-dom';
import './addressList.css';

export default function AddressList(props) {
    const [list, setList] = useState([]);

    async function fetchData() {
        let url = `https://randomuser.me/api/?results=25&seed=thom1461&format=json&nat=ca`;
        let resp = await fetch(url);
        let data = await resp.json();
        setList(data.results);
    }

    useEffect(() => {
        console.log('useEffect was called.');
        fetchData();
    }, []);

    return (
        <div className="addressList">
            {list.length === 0 && <p>Loading...</p>}
            <div className="address-list">
            {list.map((item, index) => (
                <div>
                    <p className="userName" key={item.name.last}>
                        {item.name.first} {item.name.last}
                    </p>
                    <p className="address" key={item.location.street}>
                        {item.location.street}, {item.location.city}, {item.location.state}, {item.location.postcode}
                    </p>
                </div>
                ))}
            </div>
        </div>
    );
}