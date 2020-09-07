import React from 'react';
import { Query } from 'react-apollo';
import * as Constants from './../constants';
import { withRouter } from "react-router-dom";
import './singleLesson.css';


class SingleLesson extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
    }

    componentDidMount() {
        if (this.props.lesson !== undefined && this.props.lesson) {
            this.setState({ content: this.props.lesson.children[0].contentMd });
        }
    }

    _handlePage(lesson) {
        if (lesson) {
            this.setState({ content : lesson.contentMd });
        }
    }

    render() {
        const lesson = this.props.lesson;
            
        if (!this.props.lesson) {
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
                                            <div key={index}>
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
                                    {this.state.content !== '' ? <div dangerouslySetInnerHTML={{ __html: this.state.content }} /> : this.setState({ content: lessons[0].children[0].contentMd }) }
                                </div>
                            </div>
                        )
                    }}
                </Query>
            )
        } else {
            return (
                <div className="lesson-main">
                    <div className="lesson-nav">
                        <h5>{lesson.title}</h5>
                        <ul>
                            {
                                lesson.children.map((elt, index) => {
                                    return (
                                        <li key={index} onClick={() => this._handlePage(elt)}>{index}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div id="text-content" className="lesson-content">
                        <div dangerouslySetInnerHTML={{ __html: this.state.content }} /> 
                    </div>
                </div>
            )
        }
    }
}



const SingleLessonWithRouter = withRouter(SingleLesson);
export default SingleLessonWithRouter;