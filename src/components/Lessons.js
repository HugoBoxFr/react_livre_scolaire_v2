import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-apollo';
import * as Constants from './../constants';
import { withRouter, Link, useRouteMatch, useHistory } from "react-router-dom";
import "./lessons.css";


function Lessons() {
    const match = useRouteMatch();
    const history = useHistory();
    const [lessons, setLessons] = useState([]);
    const [chapters, setChapters] = useState('');
    const [title, setTitle] = useState('');
    const [subtitle, setSubTitle] = useState('');

    const { data, error, loading } = useQuery(Constants.POST_LESSONSLIST, { 
        variables:  {id: `${[match.params.chapterId]}`},
    });
    
    useEffect(() => {
        if (data) {
            const lessonList = data.viewer.lessons.hits;
            filterList(lessonList);
        }
        
    });

    const filterList = (array) => {
        setChapters(array[0].chapter.book.chapters);
        let arrSort = array.sort((a, b) => {
            return a.page - b.page;
        });
        setLessons(arrSort);
        setTitle(arrSort[0].chapter.book.title);
        setSubTitle(arrSort[0].chapter.title);
    };

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur : {error.toString()}</div>;

    const redirectToChapters = () => {
        const path = `/${match.params.subjectId}/book/${match.params.bookId}`;
        history.push(path);
    }

    const getOnlyId = (array, newArray) => {
        array.sort((a, b) => {
            return a.number - b.number;
        });
        array.map((elt) => elt.valid ? newArray.push(elt.id) : '');
        return newArray;
    }

    const next = () => {
        let navArray = []
        getOnlyId(chapters, navArray);
        
        const currentPage = parseInt(match.params.chapterId);
        const currentIndex = (elt) => elt === currentPage;
        const nextIndex = navArray.findIndex(currentIndex) + 1;

        const btnBack = document.getElementById("back-chapter");
        btnBack.removeAttribute("disabled");

        if (nextIndex < navArray.length) {
            const nextId = navArray[nextIndex];
            const path = `/${match.params.subjectId}/${match.params.bookId}/chapter/${nextId}`;
            history.push(path);
        } 
        if (nextIndex === navArray.length - 1) {
            const btnNext = document.getElementById("next-chapter");
            btnNext.setAttribute("disabled", "");
        }
    }

    const back = () => {
        let navArray = []
        getOnlyId(chapters, navArray);
        
        const currentPage = parseInt(match.params.chapterId);
        const currentIndex = (elt) => elt === currentPage;
        const lastIndex = navArray.findIndex(currentIndex) - 1;

        const btnNext = document.getElementById("next-chapter");
        btnNext.removeAttribute("disabled");

        if (lastIndex >= 0) {
            const lastId = navArray[lastIndex];
            const path = `/${match.params.subjectId}/${match.params.bookId}/chapter/${lastId}`;
            history.push(path);
            if (lastIndex === 0) {
                const btnBack = document.getElementById("back-chapter");
                btnBack.setAttribute("disabled", "");
            }
        } 
    }


    return (
        <div className="index-main">
            <div className="Section-container">
                <div className="index-container">
                    <div className="index-title">
                        <h3>{title}</h3>
                        <h4>{subtitle}</h4>
                    </div>

                    <hr />

                        <ul>
                            {
                                lessons.map((lesson) =>  
                                    <li key={lesson.id} className={lesson.valid === false ? 'index-link-false' : 'index-link'}>
                                        <Link to={`/${match.params.subjectId}/${match.params.bookId}/${match.params.chapterId}/lesson/${lesson.id}`} style={{pointerEvents : lesson.valid ? '' : 'none'}}>
                                            <div className="index-info">
                                                <div className="index-img">
                                                    { lesson.url ? <img src={lesson.url} alt="lesson.title" /> : '' }
                                                </div>

                                                <div className="index-info-title">
                                                    <h5>{lesson.title}</h5>
                                                    <p style={{display : lesson.lessonType !== null ? 'block' : 'none'}}>{ lesson.lessonType }</p>
                                                </div>
                                            </div>

                                            <p>{lesson.page}</p>
                                        </Link>
                                    </li>
                                )
                            }
                        </ul>
                </div>

                <div className="index-nav">
                    <button onClick={back} id="back-chapter" title="Précédent"><i className="fas fa-chevron-circle-left"></i></button>
                    <button onClick={redirectToChapters} title="Chapitres"><i className="fas fa-book"></i></button>
                    <button onClick={next} id="next-chapter" title="Suivant"><i className="fas fa-chevron-circle-right"></i></button>
                </div>
            </div>
        </div>
    )
}

const LessonsWithRouter = withRouter(Lessons);
export default LessonsWithRouter;