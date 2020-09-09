import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-apollo';
import * as Constants from './../constants';
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import './chapters.css';


function Chapters() {
    const match = useRouteMatch();
    const history = useHistory();
    const [chapters, setChapters] = useState([]);
    const [title, setTitle] = useState('');

    const { data, error, loading } = useQuery(Constants.POST_CHAPTERS, { 
        variables:  {id: `${match.params.bookId}`}
    });

    useEffect(() => {
        if (data) {
            const chapters = data.viewer.chapters.hits
            filterList(chapters);
        }
    });

    const filterList = (array) => {
        if (array) {
            let arrSort = array.sort((a, b) => {
                return a.number - b.number;
            });
            setChapters(arrSort);
            arrSort[0] ? setTitle(arrSort[0].book.title) : setTitle('');
        }
    };

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur : {error.toString()}</div>;

    const redirectToChapters = () => {
        const path = `/books/${match.params.subjectId}/`;
        history.push(path);
    }


    return (
        <div className="chapter-main">
            <div className="chapters-title">
                <h3>{title}</h3>
            </div>

            <h4>Chapitres</h4>
            <div className="chapters">
                {
                    chapters.map((chapter) =>  
                        <Link to={`/${match.params.subjectId}/${match.params.bookId}/chapter/${chapter.id}`} key={chapter.id} style={{pointerEvents : chapter.valid ? '' : 'none'}}>
                            <div key={chapter.id} style={{ backgroundImage: `url(${chapter.url})` }} className={chapter.valid === false ? 'chapter-false' : 'chapter-elt'}>
                                <div className="chapter-number">
                                    <p>{chapter.number}</p>
                                </div>

                                <div className={chapter.valid === false ? 'chapter-title-false' : 'chapter-title'}>
                                    <h5>{chapter.title}</h5>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>

            <div className="chapter-nav">
                <button onClick={redirectToChapters} title="Liste"><i className="fas fa-th"></i></button>
            </div>
        </div>
    );
}


const ChaptersWithRouter = withRouter(Chapters);
export default ChaptersWithRouter;