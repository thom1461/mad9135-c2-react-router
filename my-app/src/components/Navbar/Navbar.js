import { NavLink } from 'react-router-dom';
import './navbar.css';

export default function Navbar(props) {
    return (
        <div className="navbar">
            <NavLink activeClassName="active" to="/" exact>
                Home
            </NavLink>
            <NavLink activeClassName="active" to="/userList">
                User List
            </NavLink>
            <NavLink activeClassName="active" to="/addressList">
                Address List
            </NavLink>
        </div>
    );
}