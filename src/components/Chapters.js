import React from 'react';
import { Query } from 'react-apollo';
import * as Constants from './../constants';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { ApolloProvider } from 'react-apollo';
import Lessons from './Lessons';


class Chapters extends React.Component {
    render() {
        return (
            <div>
                <div className="book-info">
                    <div className="book-image">
                        <img src={this.props.book.url} alt={this.props.displayTitle} />
                    </div>

                    <h3>{this.props.book.displayTitle}</h3>
                </div>


                {/* how to input variables in query ? */}
                <Query query={Constants.POSTS_CHAPTERS} variables={{ id: `${this.props.id}` }}>
                    {({ loading, error, data }) => {
                        if (loading) return <div>Chargement...</div>;
                        if (error) return <div>Erreur : {error.toString()}</div>;
                        const chapters = data.viewer.chapters.hits;

                        return (
                            <div>
                                {
                                    chapters.map((chapter) => {
                                        return <div key={chapter.id}>
                                            <div client={Constants.client}>
                                                <Router>
                                                    <Link to={`/livres/${this.props.book.id}/${chapter.id}`}>
                                                        <h5>{chapter.title}</h5>
                                                        <img src={chapter.url} alt={chapter.title} style={{ width: "30px" }}/>
                                                    </Link>

                                                    <Switch>
                                                        <Route path="/livres/:bookId/:chapterId">
                                                            <div>
                                                                <ApolloProvider client={Constants.client}>
                                                                    <Lessons chapter={chapter} />
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
                        );
                    }}
                </Query>
            </div>
        )
    }
}

export default Chapters;