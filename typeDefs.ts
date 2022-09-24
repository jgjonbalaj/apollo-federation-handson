import { gql } from 'apollo-server';

export const typeDefs = gql`
    type Query {
        authors: [Author!]!
        author(id: ID!): Author
        posts: [Post!]!
        post(id: ID!): Post
    }
    
    type Author {
        id: ID!
        firstName: String!
        lastName: String!
        fullName: String!
        posts: [Post]
        comments: [Comment]
    }
    
    type Post {
        id: ID!
        title: String!
        content: String!
        author: Author!
        comments: [Comment]
    }
    
    type Comment {
        id: ID!
        body: String!
        post: Post!
        author: Author!
    }
`;
