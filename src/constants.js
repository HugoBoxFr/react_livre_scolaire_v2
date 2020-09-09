import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';

export const LINKS_PER_PAGE = 5;

export const client = new ApolloClient({
  uri: "https://api-dev.lelivrescolaire.fr/graphql"
});
 

export const POST_BOOKS = gql`
    query ($id: [Int], $orderBy: LinkOrderByInput) {
        viewer {
            books (ids: $id, orderBy: $orderBy) {
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
    }`
;


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
    }`
;


export const POST_LESSONSLIST = gql`
    query ($id: [Int]) {
        viewer {
            lessons (chapterIds: $id) {
                hits {
                    id
                    title
                    page
                    lessonType
                    valid
                    chapter {
                        id
                        title
                        book {
                            id
                            title
                            chapters {
                                id
                                number
                                valid
                            }
                        }
                    }
                }
            }
        }
    }`
;


export const POST_LESSONS = gql`
    query ($id: [Int]) {
        viewer {
            lessons (chapterIds: $id) {
                hits {
                    id
                    title
                    page
                    valid
                    children {
                        id
                        type
                        title
                        order
                        content
                        url
                        poster
                        creditPoster
                        index
                        contentMd
                        assets
                    }
                    chapter {
                        id
                        title
                        book {
                            id
                            title
                        }
                    }
                }
            }
        }
    }`
;