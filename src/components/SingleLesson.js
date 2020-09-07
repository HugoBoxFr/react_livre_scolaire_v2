import React, { useState, useEffect } from 'react';
import { Query, useQuery } from 'react-apollo';
import * as Constants from './../constants';
import { withRouter } from "react-router-dom";
import './singleLesson.css';
import { useRouteMatch, Route } from 'react-router-dom';


function SingleLesson() {
    const match = useRouteMatch();
    const [lessons, setLessons] = useState([]);
    const [lesson, setLesson] = useState('');
    
    useEffect(() => {
        if (data) {
            setLessons(data.viewer.lessons.hits);
        }
    });

    function _handlePage(elt) {
        setLesson(elt.content);
    };

    const { data, error, loading } = useQuery(Constants.POST_LESSONS, { 
        variables:  {id: `${[match.params.chapterId]}`},
        suspend: false
    });

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur : {error.toString()}</div>;

    let id = parseInt(match.params.lessonId);
    
    return (
        <div className="lesson-main">
            <div className="lesson-nav"> 
                {
                    lessons.map((lesson, index) => lesson.id === id ? 
                    <div key={index}>
                            <div>
                                <h5>{lesson.title}</h5>

                                <ul key={index}>
                                        { lesson.children.map((elt, ind) => {
                                            if (elt.order) {
                                                return (
                                                    <li key={elt.order} onClick={() => _handlePage(elt)}>
                                                        {elt.order}
                                                    </li>
                                                )
                                            } else {
                                                return (
                                                    <li key={ind} onClick={() => _handlePage(elt)}>
                                                        {ind}
                                                    </li>
                                                )
                                            }
                                    })}
                                </ul>
                            </div>
                        </div>
                        : ''
                    )
                }
            </div>
            <div className="lesson-content">
                <div key={id} dangerouslySetInnerHTML={{ __html: `${lesson}` }} />
            </div>
        </div>
    )
}

const SingleLessonWithRouter = withRouter(SingleLesson);
export default SingleLessonWithRouter;