import React from 'react';
import { Query } from 'react-apollo';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { ApolloProvider } from 'react-apollo';
import * as Constants from './../constants';
import Book from './Book';

 
class BooksList extends React.Component {
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
                                books.map((book) => {
                                    return <div key={book.id}>
                                        <div client={Constants.client}>
                                            <Router>
                                                <Link to={`/livres/${book.id}`}>
                                                    <h5>{book.displayTitle}</h5>
                                                </Link>

                                                <Switch>
                                                    <Route path="/livres/:id">
                                                        <div>
                                                            <ApolloProvider client={Constants.client}>
                                                                <Book book={book}/>
                                                            </ApolloProvider>
                                                        </div>
                                                    </Route>
                                                </Switch>
                                            </Router>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    )
                    }}
                </Query>
            </div>
        );
    }
}

export default BooksList;