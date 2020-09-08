import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-apollo';
import * as Constants from './../constants';
import { withRouter } from "react-router-dom";
import './singleLesson.css';
import { useRouteMatch } from 'react-router-dom';


function SingleLesson() {
    const match = useRouteMatch();
    const [lessons, setLessons] = useState([]);
    let id = parseInt(match.params.lessonId);

    const { data, error, loading } = useQuery(Constants.POST_LESSONS, { 
        variables:  {id: `${[match.params.chapterId]}`}
    });

    useEffect(() => {
        if (data) {
            const lessonList = data.viewer.lessons.hits
            filterList(lessonList);
        }
    });

    const filterList = (array) => {
        let firstArray = array.sort((a, b) => {
            return a.page - b.page;
        });
        let arr = firstArray.filter(elt => elt.id === id);
        let arrChildren = arr[0].children;
        let arrSort = arrChildren.sort((a, b) => {
            return a.order - b.order;
        });
        setLessons(arrSort);
    };


    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur : {error.toString()}</div>;

    console.log(lessons)

    
    return (
        <div className="lesson-main">
            <div className="lesson-content">
                {
                    lessons.map((elt, index) => 
                        elt.content ?
                            <div key={elt.id} dangerouslySetInnerHTML={{ __html: `${elt.content}` }} /> 
                            : <div key={elt.id} dangerouslySetInnerHTML={{ __html: `${elt.contentMd}` }} />
                    )
                }
            </div>
        </div>
    )
}

const SingleLessonWithRouter = withRouter(SingleLesson);
export default SingleLessonWithRouter;