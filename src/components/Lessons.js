// import React from 'react';
// import { Query } from 'react-apollo';
// import * as Constants from './../constants';
// import {Link} from "react-router-dom";
// import { withRouter } from "react-router-dom";

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
            lessonList.sort((a, b) => {
                return a.page - b.page;
            });
            setLessons(lessonList);
        }
    });

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

            
            //<div>
                /* <Query query={Constants.POST_LESSONS} variables={{ id: `${[this.props.match.params.chapterId]}` }}>
                    {({ loading, error, data }) => {
                        if (loading) return <div>Chargement...</div>;
                        if (error) return <div>Erreur : {error.toString()}</div>;
                        const lessons = data.viewer.lessons.hits;
                        lessons.sort((a, b) => {
                            return a.page - b.page;
                        });

                        return (
                            <div>
                                {
                                    lessons.map((lesson) =>  
                                        <div key={lesson.id}>
                                            <div>
                                                <div to={`/${lesson.chapter.book.id}/${lesson.chapter.id}/lesson/${lesson.id}`} onClick={() => this.props.updateLesson([lesson, lesson.id])}>
                                                    <h5>{lesson.title}</h5>
                                                </div>
                                                <p>{lesson.page}</p>
                                                <p>{lesson.thematic}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        );
                    }}
                </Query> */
            //</div>
        )
}

const LessonsWithRouter = withRouter(Lessons);
export default LessonsWithRouter;