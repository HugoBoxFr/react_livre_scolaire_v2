import React from 'react';
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import * as Schema from './../schema';
import './home.css';


function Home(props) {  
    // for the exercice i only get few subjects from schema

    function handleSubject(e) {
        props.onSub(e.target.value);
    }

    const subjects = Schema.subjects;

    console.log(subjects);
    
    return (
        <div className="home">
            <h1>Bienvenue sur "Le Livre Scolaire"</h1>

            <h3>Choisissez un thème :</h3>

            {
                <ul>
                    {
                        subjects.map((elt) => {
                            return (
                                <Link to={`/books/${elt.id}`} key={elt.id} >
                                    <li key={elt.id} value={elt.id} onClick={handleSubject} style={{ backgroundImage: `url(${elt.url})` }}>{elt.name}</li>
                                </Link>
                            )
                        })
                    }
                </ul>
            }
            
        </div>
    )
};

const HomeWithRouter = withRouter(Home);
export default HomeWithRouter;