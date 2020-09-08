import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-apollo';
import * as Constants from './../constants';
import { withRouter, Link } from "react-router-dom";
import { useRouteMatch } from 'react-router-dom';
import "./lessons.css";


function Lessons() {
    const match = useRouteMatch();
    const [lessons, setLessons] = useState([]);
    const [title, setTitle] = useState('');
    const [subtitle, setSubTitle] = useState('');

    const { data, error, loading } = useQuery(Constants.POST_LESSONSLIST, { 
        variables:  {id: `${[match.params.chapterId]}`},
    });
    
    useEffect(() => {
        if (data) {
            const lessonList = data.viewer.lessons.hits
            filterList(lessonList);
        }
        
    });

    const filterList = (array) => {
        let arrSort = array.sort((a, b) => {
            return a.page - b.page;
        });
        setLessons(arrSort);
        setTitle(arrSort[0].chapter.book.title);
        setSubTitle(arrSort[0].chapter.title);
    };

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur : {error.toString()}</div>;


    return (
        <div className="index-main">
            <h3>{title}</h3>
            <h4>{subtitle}</h4>

            <div className="index-container">
                    <ul>
                        {
                            lessons.map((lesson) =>  
                                <li key={lesson.id} className="index-link">
                                    <Link to={`/${lesson.chapter.book.id}/${lesson.chapter.id}/lesson/${lesson.id}`} >
                                        <div>
                                            <h5>{lesson.title}</h5>
                                            <p style={{display : lesson.lessonType !== null ? 'block' : 'none'}}>{ lesson.lessonType }</p>
                                        </div>
                                        <p>{lesson.page}</p>
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
            </div>
        </div>
    )
}

const LessonsWithRouter = withRouter(Lessons);
export default LessonsWithRouter;