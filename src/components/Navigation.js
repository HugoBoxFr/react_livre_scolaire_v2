import React from 'react';
import {Link} from "react-router-dom";
import './navigation.css';

function Navigation() {
    return (
        <nav className="NavBar">
            <ul>
              <li>
                <Link to="/" title="Accueil"><i className="fas fa-bookmark"></i></Link>
              </li>
            </ul>
        </nav>
    );
}

export default Navigation;