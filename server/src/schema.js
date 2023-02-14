const { gql } = require("apollo-server");

const typeDefs = gql`
  " Schema definitions"
  type Query {
    "fields"
    tracksForHome: [Track!]!
  }

  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  type Author {
    "fields"
    id: ID!
    name: String!
    photo: String
  }
`;
module.exports = typeDefs;
