import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';

export const client = new ApolloClient({
  uri: "https://api-dev.lelivrescolaire.fr/graphql"
});
 
export const POSTS_BOOKS = gql`
    query {
        viewer {
            books {
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
    }
`;

export const POSTS_CHAPTERS = gql`
    query {
        viewer {
            chapters(bookIds: 1339497) {
            hits {
            title
            id
            valid
            url
            }
        }
        }
    }
`;