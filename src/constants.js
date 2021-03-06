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
                        id
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

export const POST_FILTERED_BOOKS = gql`
    query ($id: [Int]) {
        viewer {
            books (subjectIds: $id) {
                hits {
                    id
                    displayTitle
                    url
                    subjects {
                        id
                        name
                        url
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
                    url
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


export const POST_SUBJECTS = gql`
    query {
        viewer {
            subjects {
                hits {
                    id
                    name
                }
            }
        }
    }`
;