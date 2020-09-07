import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-apollo';
import * as Constants from './../constants';
import { withRouter, Link } from "react-router-dom";
import './singleLesson.css';
import { useRouteMatch } from 'react-router-dom';


function Lessons() {
    const match = useRouteMatch();
    const [lessons, setLessons] = useState([]);
    
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
    };

    const { data, error, loading } = useQuery(Constants.POST_LESSONSLIST, { 
        variables:  {id: `${[match.params.chapterId]}`},
        suspend: false
    });

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur : {error.toString()}</div>;


    return (
        <div>
            <div>
                {
                    lessons.map((lesson) =>  
                        <div key={lesson.id}>
                            <div>
                                <Link to={`/${lesson.chapter.book.id}/${lesson.chapter.id}/lesson/${lesson.id}`} >
                                    <h5>{lesson.title}</h5>
                                </Link>
                                <p>{lesson.page}</p>
                                <p>{lesson.thematic}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

const LessonsWithRouter = withRouter(Lessons);
export default LessonsWithRouter;