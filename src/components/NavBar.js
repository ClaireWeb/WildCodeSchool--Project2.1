import React from 'react';

import iconTree from '../icon-tree.svg'
import iconUser from '../icon-user.svg'
import { Link } from "react-router-dom";


import '../App.scss';

class NavBar extends React.Component {

    logOut = (event) => {
        localStorage.removeItem('email');
    }

    render() {
        return (
            <div id="navBar">
                <Link to="/" className="header--title">
                    <ul>
                        <li><img src={iconTree} alt="icon tree" /></li>
                        <li><h1>PlantMe</h1></li>
                    </ul>
                </Link>
                <ul className="menu">
                    <li><Link to="/garden">Garden</Link></li>
                    <li><Link to="/board">Board</Link></li>
                    <li><Link to="/alerts">Alerts</Link></li>
                </ul>
                <ul className="logout">
                    <li className="alert-icon"><img src={iconUser} alt="icon user" /></li>
                </ul>
                <ul className="ul-log">
                    <li className="log"><form><button className="NavBar-logout" onClick={this.logOut} >Sign out</button></form></li>
                </ul>
            </div >
        );
    };
}

export default NavBar;