import React from 'react';
import { withRouter } from "react-router-dom";
import * as Schema from './../schema';
import './home.css';


function Home(props) {
    // const { data, error, loading } = useQuery(Constants.POST_SUBJECTS);
    
    // useEffect(() => {  
    //     if (data) {
    //     }
    // }, [data]);
    

    // if (loading) return <div>Chargement...</div>;
    // if (error) return <div>Erreur : {error.toString()}</div>;
    
    // for the exercice i only get few subjects from schema

    function handleSubject(e) {
        props.onSub(e.target.value);
    }

    const subjects = Schema.subjects;
    
    return (
        <div className="home">
            <h1>Bienvenue sur "Le Livre Scolaire"</h1>

            {
                <ul>
                    {
                        subjects.map((elt) => {
                            return <li key={elt.id} value={elt.id} onClick={handleSubject}>{elt.name}</li>
                        })
                    }
                </ul>
            }
            
        </div>
    )
};

const HomeWithRouter = withRouter(Home);
export default HomeWithRouter;