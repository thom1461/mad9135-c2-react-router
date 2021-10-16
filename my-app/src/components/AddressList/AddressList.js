import { useState, useEffect } from 'react';
//import { Route, NavLink } from 'react-router-dom';
import './addressList.css';

export default function AddressList() {
    const [list, setList] = useState([]);
    
    
    useEffect(() => {
        (async function () {
            let url = `https://randomuser.me/api/?results=25&seed=thom1461&format=json&nat=ca`;
            let resp = await fetch(url);
            let data = await resp.json();
            let sortedData = await data.results.sort((a, b) => {
                if (a.name.last < b.name.last) return -1;
                if (a.name.last > b.name.last) return 1;
                return 0;
            });
            setList(sortedData);
        })();
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
                        {item.location.street.number} {item.location.street.name}, {item.location.city}, {item.location.state}, {item.location.postcode}
                    </p>
                    </div>
                ))}
            </div>
        </div>
    );
}