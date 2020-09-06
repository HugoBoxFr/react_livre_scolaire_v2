import React from 'react';
import { Query } from 'react-apollo';
import * as Constants from './../constants';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { withRouter } from "react-router-dom";


class Lessons extends React.Component {

    componentDidMount() {
        const { match, location, history } = this.props;
    }

    render() {
        return (
            <div>
                <Query query={Constants.POSTS_LESSONS} variables={{ id: `${[this.props.match.params.chapterId]}` }}>
                    {({ loading, error, data }) => {
                        if (loading) return <div>Chargement...</div>;
                        if (error) return <div>Erreur : {error.toString()}</div>;
                        const lessons = data.viewer.lessons.hits;
                        lessons.sort((a, b) => {
                            return a.page - b.page;
                        });
                        const title = lessons[0].chapter.title;

                        return (
                            <div>
                                <h5>{title}</h5>
                                {
                                    lessons.map((lesson) =>  
                                        <div key={lesson.id}>
                                            <div>
                                                <Link to={`/chapter/${lesson.chapter.id}/lesson/${lesson.id}`}>
                                                    <h5>{lesson.title}</h5>
                                                </Link>
                                                <p>{lesson.page}</p>
                                                <p>{lesson.thematic}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        );
                    }}
                </Query>
            </div>
        )
    }
}

const LessonsWithRouter = withRouter(Lessons);
export default LessonsWithRouter;