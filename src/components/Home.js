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
    
    return (
        <div className="home">
            <header className="home-header">
                <div className="Section-container">
                    <div className="title">
                        <i className="fas fa-bookmark"></i>
                        <h1>Bienvenue sur "Le Livre Scolaire"</h1>
                    </div>

                    <div className="home-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor mi et dui condimentum mollis. 
                            Duis varius, ante ut semper tempor, leo velit suscipit ligula, vel condimentum ipsum velit et magna. 
                            Aliquam erat volutpat. Integer enim nulla, tempor a pellentesque ac, convallis ut libero. 
                            Maecenas malesuada lacus orci, eu ornare purus faucibus id. Sed fringilla malesuada consectetur.</p>
                    </div>
                </div>
            </header>
            
            <div>
                <div className="Section-container">
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
            </div>
        </div>
    )
};

const HomeWithRouter = withRouter(Home);
export default HomeWithRouter;