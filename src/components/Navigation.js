import React from 'react';
import {Link} from "react-router-dom";

function Navigation() {
    return (
        <nav className="NavBar">
            <ul>
              <li>
                <Link to="/">Accueil</Link>
              </li>

              <li>
                <Link to="/books">Tous les livres</Link>
              </li>
            </ul>
        </nav>
    );
}

export default Navigation;