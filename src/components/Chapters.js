import React from 'react';
import { Query } from 'react-apollo';
import * as Constants from './../constants';
import {Link} from "react-router-dom";
import { withRouter } from "react-router-dom";


class Chapters extends React.Component {
    
    componentDidMount() {
        const { match, location, history } = this.props;
    }

    render() {
        return (
            <div>
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
                            <div>
                                <h5>{title}</h5>
                                {
                                    chapters.map((chapter) =>  
                                        <div key={chapter.id}>
                                            <div>
                                                <Link to={`/book/${chapter.book.id}/chapter/${chapter.id}`} >
                                                    <h5>{chapter.title}</h5>
                                                </Link>
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


const ChaptersWithRouter = withRouter(Chapters);
export default ChaptersWithRouter;