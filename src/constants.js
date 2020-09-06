import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';


export const client = new ApolloClient({
  uri: "https://api-dev.lelivrescolaire.fr/graphql"
});
 

export const POSTS_BOOKS = gql`
    query ($id: [Int]) {
        viewer {
            books (ids: $id) {
                hits {
                    id
                    displayTitle
                    url
                    subjects {
                        name
                    }
                    levels {
                        name
                    }
                }
            }
        }
    }`;


export const POSTS_CHAPTERS = gql`
    query ($id: [Int]) {
        viewer {
            chapters (bookIds: $id) {
                hits {
                    title
                    id
                    valid
                    url
                    book {
                        title
                        id
                    }
                }
            }
        }
    }`;


export const POSTS_LESSONS = gql`
    query ($id: [Int]) {
        viewer {
            lessons (chapterIds: $id) {
                hits {
                    id
                    title
                    page
                    thematic
                    chapter {
                        id
                        title
                    }
                }
            }
        }
    }`;

