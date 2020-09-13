import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-apollo';
import * as Constants from './../constants';
import { withRouter, Link, useRouteMatch } from "react-router-dom";
import "./filteredBooks.css";

function FilteredBooks() {
    const match = useRouteMatch();
    const [books, setBooks] = useState([]);
    const [title, setTitle] = useState('');
    
    const { data, error, loading } = useQuery(Constants.POST_FILTERED_BOOKS, { 
        variables:  {id: match.params.subjectId}
    });
    
    useEffect(() => {  
        if (data) {
            const booksList = data.viewer.books.hits;
            setBooks(booksList);
            setTitle(booksList[0].subjects[0].name);
        }
    }, [data]);


    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur : {error.toString()}</div>;


    return (
        <div className="books-main">
            <div className="Section-container">
                <div className="books-title">
                    <h3>{title}</h3>
                </div>

                <div className="books">
                    {
                        books.map((book) =>  (book.displayTitle !== null && book.url !== null) ? 
                            <div key={book.id} className="book">
                                <div>
                                    <Link to={`/${match.params.subjectId}/book/${book.id}`}>
                                        <div className="title">
                                            <h3>{book.displayTitle}</h3>
                                        </div>

                                        <div className="cover">
                                            { book.url != null ? <img src={book.url} alt={book.title} /> : <p>Image indisponible</p>}
                                        </div>
                                    </Link>
                                </div>
                            </div> : ''
                        )
                    }
                </div>
            </div>
        </div>
    );
}


const FilteredBooksWithRouter = withRouter(FilteredBooks);
export default FilteredBooksWithRouter;