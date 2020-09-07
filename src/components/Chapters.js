import React from 'react';
import { Query } from 'react-apollo';
import * as Constants from './../constants';
import {Link} from "react-router-dom";
import { withRouter } from "react-router-dom";
import './chapters.css';


class Chapters extends React.Component {
    
    componentDidMount() {
        // const { match, location, history } = this.props;
    }

    render() {
        return (
            <Query query={Constants.POST_CHAPTERS} variables={{ id: `${[this.props.match.params.bookId]}` }}>
                {({ loading, error, data }) => {
                    if (loading) return <div>Chargement...</div>;
                    if (error) return <div>Erreur : {error.toString()}</div>;
                    const chapters = data.viewer.chapters.hits;
                    chapters.sort((a, b) => {
                        return a.number - b.number;
                    });
                    const title = chapters[0].book.title;

                    return (
                        <div className="chapter-main">
                            <h3>{title}</h3>

                            <div className="chapters">
                                {
                                    chapters.map((chapter) =>  
                                        <Link to={`/${chapter.book.id}/chapter/${chapter.id}`} key={chapter.id}>
                                            <div key={chapter.id} className="chapter-elt" style={{ backgroundImage: `url(${chapter.url})` }}>
                                                <div className="chapter-number">
                                                    <p>{chapter.number}</p>
                                                </div>

                                                <div className="chapter-title">
                                                    <h5>{chapter.title}</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                }
                            </div>
                        </div>
                    );
                }}
            </Query>
        )
    }
}


const ChaptersWithRouter = withRouter(Chapters);
export default ChaptersWithRouter;