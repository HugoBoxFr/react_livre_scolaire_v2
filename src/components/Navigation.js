import React from 'react';
import { Link, withRouter, useHistory } from "react-router-dom";
import './navigation.css';
import * as Schema from './../schema';

function Navigation() {

  let history = useHistory();

  function handleSubject(e) {
    history.push(`/books/${e.target.value}`);
  }

  const subjects = Schema.subjects;

  return (
      <nav className="NavBar">
          <ul>
            <li>
              <Link to="/" title="Accueil"><i className="fas fa-bookmark"></i> Le Livre Scolaire</Link>
            </li>
          </ul>

          <div>
              {
                <select onChange={handleSubject}>      
                  <option value="Matières" style={{pointerEvents : false}}>Matières</option>
                  {
                    subjects.map((elt) => {
                      return (
                        <option key={elt.id} value={elt.id}>
                          {elt.name}
                        </option>
                      )
                    })
                  }
                </select>
              } 
          </div>
      </nav>
  );
}


const NavWithRouter = withRouter(Navigation);
export default NavWithRouter;
