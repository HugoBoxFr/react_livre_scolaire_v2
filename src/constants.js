import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';


export const client = new ApolloClient({
  uri: "https://api-dev.lelivrescolaire.fr/graphql"
});
 

export const POST_BOOKS = gql`
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


export const POST_CHAPTERS = gql`
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
                    number
                }
            }
        }
    }`;


export const POST_LESSONS = gql`
    query ($id: [Int]) {
        viewer {
            lessons (chapterIds: $id) {
                hits {
                    id
                    title
                    page
                    thematic
                    valid
                    children {
                        id
                        url
                        contentMd
                        content
                        order
                        caption
                        title
                    }
                    chapter {
                        id
                        title
                        book {
                            id
                            title
                        }
                        lessons {
                            page
                        }
                    }
                }
            }
        }
    }`;

// export const POST_LESSON = gql`
//     query ($id: [Int]) {
//         viewer {
//         lessons (chapterIds: $id) {
//             hits {
//                 id
//                 title
//                 children {
//                     id
//                     url
//                     contentMd
//                     content
//                     order
//                     caption
//                     title
//                 }
//                 chapter {
//                     id
//                     title
//                 }
//             }
//         }
//       }
//     }`;

