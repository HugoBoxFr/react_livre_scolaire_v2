import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-apollo';
import * as Constants from './../constants';
import { withRouter, useRouteMatch, useHistory } from "react-router-dom";
import './singleLesson.css';


function SingleLesson() {
    const match = useRouteMatch();
    const history = useHistory();
    const [lessons, setLessons] = useState([]);
    const [chapters, setChapters] = useState('');
    const [title, setTitle] = useState('');
    const [subtitle, setSubTitle] = useState('');
    const [lessonTitle, setLessonTitle] = useState('');
    let id = parseInt(match.params.lessonId);

    const { data, error, loading } = useQuery(Constants.POST_LESSONS, { 
        variables:  {id: `${[match.params.chapterId]}`}
    });

    useEffect(() => {
        if (data) {
            const lessonList = data.viewer.lessons.hits;
            filterList(lessonList);
        }
    });

    const filterList = (array) => {
        let firstArray = array.sort((a, b) => {
            return a.page - b.page;
        });
        setChapters(firstArray);

        let arr = firstArray.filter(elt => elt.id === id);
        let arrChildren = arr[0].children;
        arrChildren.map((elt, index) => !elt ? arrChildren[index] = {order: index, contentMd: null, content: null} : arrChildren[index] = elt);
        arrChildren.map((elt) => elt.content === null ? elt.content = '' : elt);
        arrChildren.map((elt) => elt.contentMd === null ? elt.contentMd = '' : elt);
        let arrSort = arrChildren.sort((a, b) => {
            return a.order - b.order;
        });
        setLessons(arrSort);
        setTitle(firstArray[0].chapter.book.title);
        setSubTitle(firstArray[0].chapter.title);
        setLessonTitle(arr[0].title);
    };

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur : {error.toString()}</div>;


    const redirectToChapters = () => {
        const path = `/${match.params.subjectId}/book/${match.params.bookId}`;
        history.push(path);
    }

    const redirectToLessons = () => {
        const path = `/${match.params.subjectId}/${match.params.bookId}/chapter/${match.params.chapterId}`;
        history.push(path);
    }

    const getOnlyId = (array, newArray) => {
        array.map((elt) => elt.valid ? newArray.push(elt.id) : '');
        return newArray;
    }

    const next = () => {
        let navArray = []
        getOnlyId(chapters, navArray);
        
        const currentPage = parseInt(match.params.lessonId);
        const currentIndex = (elt) => elt === currentPage;
        const nextIndex = navArray.findIndex(currentIndex) + 1;

        const btnBack = document.getElementById("back");
        btnBack.removeAttribute("disabled");

        if (nextIndex < navArray.length) {
            const nextId = navArray[nextIndex];
            const path = `/${match.params.subjectId}/${match.params.bookId}/${match.params.chapterId}/lesson/${nextId}`;
            history.push(path);
        } 
        if (nextIndex === navArray.length - 1) {
            const btnNext = document.getElementById("next");
            btnNext.setAttribute("disabled", "");
        }
    }

    const back = () => {
        let navArray = []
        getOnlyId(chapters, navArray);
        
        const currentPage = parseInt(match.params.lessonId);
        const currentIndex = (elt) => elt === currentPage;
        const lastIndex = navArray.findIndex(currentIndex) - 1;

        const btnNext = document.getElementById("next");
        btnNext.removeAttribute("disabled");

        if (lastIndex >= 0) {
            const lastId = navArray[lastIndex];
            const path = `/${match.params.subjectId}/${match.params.bookId}/${match.params.chapterId}/lesson/${lastId}`;
            history.push(path);
            if (lastIndex === 0) {
                const btnBack = document.getElementById("back");
                btnBack.setAttribute("disabled", "");
            }
        } 
    }

    
    return (
        <div className="lesson-main">
            <div className="lesson-title">
                <h3>{title}</h3>&nbsp;-&nbsp;<h4>{subtitle}</h4>
            </div>

            <div className="lesson-content">
                <h4>{lessonTitle}</h4>
                <hr />

                {
                    lessons.map((elt, index) => 
                        elt.content ?
                            <div key={index} dangerouslySetInnerHTML={{ __html: `${elt.content}` }} /> 
                            : <div key={index} dangerouslySetInnerHTML={{ __html: `${elt.contentMd}` }} />
                    )
                }
            </div>

            <div className="lesson-nav">
                <button onClick={back} id="back" title="Précédent"><i className="fas fa-arrow-circle-left"></i></button>
                <button onClick={redirectToChapters} title="Chapitres"><i className="fas fa-book"></i></button>
                <button onClick={redirectToLessons} title="Leçons"><i className="fas fa-list-alt"></i></button>
                <button onClick={next} id="next" title="Suivant"><i className="fas fa-chevron-circle-right"></i></button>
            </div>
        </div>
    )
}


const SingleLessonWithRouter = withRouter(SingleLesson);
export default SingleLessonWithRouter;