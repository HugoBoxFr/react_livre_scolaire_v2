import React from 'react';
import { Query } from 'react-apollo';
import * as Constants from './../constants';


class Book extends React.Component {
    render() {
        return (
            <div>
                <div className="book-info">
                    <div className="book-image">
                        <img src={this.props.book.url} alt={this.props.displayTitle} />
                    </div>

                    <h3>{this.props.book.id}</h3>
                </div>

                <Query query={Constants.POSTS_CHAPTERS}>
                    {({ loading, error, data }) => {
                        if (loading) return <div>Chargement...</div>;
                        if (error) return <div>Erreur : {error.toString()}</div>;
                        const chapters = data.viewer.chapters.hits;

                        return (
                            <div>
                                {
                                    chapters.map((chapter) => {
                                        return <div key={chapter.id} >
                                            <h5>{chapter.title}</h5>
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

export default Book;