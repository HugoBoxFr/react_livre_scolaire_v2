import React from 'react';
import { Query } from 'react-apollo';
import * as Constants from './../constants';
import {Link} from "react-router-dom";
import { withRouter } from "react-router-dom";


class Lessons extends React.Component {

    componentDidMount() {
        // const { match, location, history } = this.props;
    }

    render() {
        return (
            <div>
                <Query query={Constants.POST_LESSONS} variables={{ id: `${[this.props.match.params.chapterId]}` }}>
                    {({ loading, error, data }) => {
                        if (loading) return <div>Chargement...</div>;
                        if (error) return <div>Erreur : {error.toString()}</div>;
                        const lessons = data.viewer.lessons.hits;
                        lessons.sort((a, b) => {
                            return a.page - b.page;
                        });

                        return (
                            <div>
                                {
                                    lessons.map((lesson) =>  
                                        <div key={lesson.id}>
                                            <div>
                                                <Link to={`/${lesson.chapter.book.id}/${lesson.chapter.id}/lesson/${lesson.id}`} onClick={() => this.props.handleLesson(lesson)}>
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