import React from 'react';
import { Query } from 'react-apollo';
import * as Constants from './../constants';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { ApolloProvider } from 'react-apollo';


class Lessons extends React.Component {
    render() {
        return (
            <div>
                <div className="chapter-info">
                    <div className="chapter-image">
                        <img src={this.props.chapter.url} alt={this.props.title} />
                    </div>

                    <h3>{this.props.chapter.title}</h3>
                </div>


                {/* how to input variables in query ? */}
                <Query query={Constants.POSTS_LESSONS} variables={{ id: `${this.props.id}` }}>
                    {({ loading, error, data }) => {
                        if (loading) return <div>Chargement...</div>;
                        if (error) return <div>Erreur : {error.toString()}</div>;
                        const lessons = data.viewer.lessons.hits;

                        return (
                            <div>
                                ok
                                {/* {
                                    chapters.map((chapter) => {
                                        return <div key={chapter.id}>
                                            <div client={Constants.client}>
                                                <Router>
                                                    <Link to={`/livres/${this.props.book.id}/${chapter.id}/${lessons}`}>
                                                        <h5>{chapter.title}</h5>
                                                    </Link>

                                                    <Switch>
                                                        <Route path="/livres/:bookId/:chapterId/:lessonsId">
                                                            <div>
                                                                <ApolloProvider client={Constants.client}>
                                                                    ok
                                                                </ApolloProvider>
                                                            </div>
                                                        </Route>
                                                    </Switch>
                                                </Router>
                                            </div>
                                        </div>
                                    })
                                } */}
                            </div>
                        );
                    }}
                </Query>
            </div>
        )
    }
}

export default Lessons;