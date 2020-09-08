import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-apollo';
import * as Constants from './../constants';
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./books.css";


function Books() {
    const [books, setBooks] = useState([]);
    
    const { data, error, loading } = useQuery(Constants.POST_BOOKS);
    
    useEffect(() => {  
        if (data) {
            const booksList = data.viewer.books.hits;
            setBooks(booksList);
        }
    }, [data]);
    

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur : {error.toString()}</div>;


    return (
        <div className="chapter-main">
            <div className="books">
                {
                    books.map((book) =>  book.displayTitle !== null ? 
                        <div key={book.id} className="book">
                            <div>
                                <Link to={`/book/${book.id}`}>
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
    );
}


const BooksWithRouter = withRouter(Books);
export default BooksWithRouter;