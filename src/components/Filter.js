import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-apollo';
import * as Constants from './../constants';
import { Link, useLocation } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { useRouteMatch, useHistory } from 'react-router-dom';
import * as Schema from './../schema';


function Filter(props) {
    // const { data, error, loading } = useQuery(Constants.POST_SUBJECTS);
    
    // useEffect(() => {  
    //     if (data) {
    //     }
    // }, [data]);
    

    // if (loading) return <div>Chargement...</div>;
    // if (error) return <div>Erreur : {error.toString()}</div>;


    function handleSubject(e) {
        props.onChange(e.target.value);
    }

    // for the exercice i only get few subjects from schema
    const subjects = Schema.subjects;
    
    return (
        <div>
            {
                <select onChange={handleSubject}>
                    {
                        subjects.map((elt) => {
                            return <option key={elt.id} value={elt.id}>{elt.name}</option>
                        })
                    }
                </select>
            }
            
        </div>
    )
};

export default Filter;