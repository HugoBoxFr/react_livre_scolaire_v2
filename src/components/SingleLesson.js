import React from 'react';
import { Query } from 'react-apollo';
import * as Constants from './../constants';
import { withRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import './singleLesson.css';


class SingleLesson extends React.Component {

    componentDidMount() {
        const { match, location, history } = this.props;
    }

    _handlePage(lesson) {
        if (lesson) {
            if (lesson.contentMd) {
                const element = (
                    <div dangerouslySetInnerHTML={{ __html: lesson.contentMd }} />
                );
                ReactDOM.render(element, document.getElementById('text-content'));
            } else if (lesson.content) {
                const element = (
                    <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
                );
                ReactDOM.render(element, document.getElementById('text-content'));
            }
        }
    }

    render() {

        return (
            <Query query={Constants.POST_LESSONS} variables={{ id: `${[this.props.match.params.chapterId]}` }}>
                {({ loading, error, data }) => {
                    if (loading) return <div>Chargement...</div>;
                    if (error) return <div>Erreur : {error.toString()}</div>;
                    const lessons = data.viewer.lessons.hits;

                    return (
                        <div className="lesson-main">
                            <div className="lesson-nav">
                                {
                                    lessons.map((elt, index) => 
                                        <div>
                                            <h5>{elt.title}</h5>

                                            <ul key={index}>
                                                { elt.children.map((lesson, ind) => {
                                                    return (
                                                        <li key={ind} onClick={() => this._handlePage(lesson)}>
                                                            {ind}
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    )
                                }
                            </div>

                            <div id="text-content" className="lesson-content">
                            </div>
                        </div>
                    )
                }}
            </Query>
        )
    }
}

const SingleLessonWithRouter = withRouter(SingleLesson);
export default SingleLessonWithRouter;