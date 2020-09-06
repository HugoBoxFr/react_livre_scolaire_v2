import React from 'react';
import { Query } from 'react-apollo';
import {Link} from "react-router-dom";
import * as Constants from '../constants';

 
class Books extends React.Component {
    render() {
        return (
            <div>
                <h2>Notre liste de livres scolaires</h2>

                <Query query={Constants.POSTS_BOOKS}>
                    {({ loading, error, data }) => {
                    if (loading) return <div>Chargement...</div>;
                    if (error) return <div>Erreur : {error.toString()}</div>;
                    const books = data.viewer.books.hits;
                
                    return (
                        <div>
                            {
                                books.map((book) =>  book.displayTitle !== null ? 
                                    <div key={book.id}>
                                        <div>
                                            <Link to={`/books/${book.id}`}>
                                                <h5>{book.displayTitle}</h5>
                                            </Link>
                                        </div>
                                        <hr />
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