import React from 'react';
import { Query } from 'react-apollo';
import {Link} from "react-router-dom";
import * as Constants from '../constants';
import "./books.css";

 
class Books extends React.Component {
    render() {
        return (
            <div className="books-main">
                <h2>Notre liste de livres scolaires</h2>

                <Query query={Constants.POST_BOOKS}>
                    {({ loading, error, data }) => {
                    if (loading) return <div className="loading">Chargement...</div>;
                    if (error) return <div className="loading">Erreur : {error.toString()}</div>;
                    const books = data.viewer.books.hits;
                
                    return (
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
                    )
                    }}
                </Query>
            </div>
        );
    }
}

export default Books;