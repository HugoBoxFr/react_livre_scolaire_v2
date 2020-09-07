import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-apollo';
import * as Constants from './../constants';
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import './chapters.css';
import { useRouteMatch } from 'react-router-dom';


function Chapters() {
    const match = useRouteMatch();
    const [chapters, setChapters] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        if (data) {
            const chapters = data.viewer.chapters.hits
            filterList(chapters);
        }
    });

    const filterList = (array) => {
        let arrSort = array.sort((a, b) => {
            return a.page - b.page;
        });
        setChapters(arrSort);
        setTitle(arrSort[0].book.title)
    };


    const { data, error, loading } = useQuery(Constants.POST_CHAPTERS, { 
        variables:  {id: `${match.params.bookId}`}
    });

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur : {error.toString()}</div>;


    return (
        <div className="chapter-main">
            <h3>{title}</h3>

            <div className="chapters">
                {
                    chapters.map((chapter) =>  
                        <Link to={`/${chapter.book.id}/chapter/${chapter.id}`} key={chapter.id}>
                            <div key={chapter.id} className="chapter-elt" style={{ backgroundImage: `url(${chapter.url})` }}>
                                <div className="chapter-number">
                                    <p>{chapter.number}</p>
                                </div>

                                <div className="chapter-title">
                                    <h5>{chapter.title}</h5>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
}


const ChaptersWithRouter = withRouter(Chapters);
export default ChaptersWithRouter;