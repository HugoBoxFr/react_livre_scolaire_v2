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
                <Link to="/livres">Tous les livres</Link>
              </li>
{/* 
              <li>
                <Link to="/livres/:id">Votre sélection</Link>
              </li> */}
            </ul>
        </nav>
    );
}

export default Navigation;