import { useState, useEffect } from 'react';
//import { Route, NavLink } from 'react-router-dom';
import './addressList.css';

export default function Addresslist(props) {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetchData('addressList');
    }, []);

    async function fetchData(type) {
        let url = ``;
        let resp = await fetch(url);
        let data = await resp.json();
        setList(data.results);
    }

    function findAddress(id) {
        return list.find((item, index) => parseInt(id) === index + 1);
    }

    return (
        <div className="addressList">
            {list.length === 0 && <p>Loading...</p>}
            <div className="address-list">
            {list.map((item, index) => (
                    <p className="addressList" key={item.name}>
                        {item.name}
                    </p>
                ))}
                {list.map((item, index) => (
                    <p className="addressList" key={item.email}>
                        {item.location.street}, {item.location.city}, {item.location.state}, {item.location.postcode}
                    </p>
                ))}
            </div>
        </div>
    );
}