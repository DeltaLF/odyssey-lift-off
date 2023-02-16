const { gql } = require("apollo-server");

const typeDefs = gql`
  " Schema definitions"
  type Query {
    "fields"
    tracksForHome: [Track!]! # return Track array
    track(id: ID!): Track # return one Track
    module(id: ID!): Module # return one module
  }

  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
    description: String
    numberOfViews: Int
    modules: [Module!]!
  }

  type Author {
    "fields"
    id: ID!
    name: String!
    photo: String
  }

  type Module {
    id: ID!
    title: String!
    length: Int
    trackId: ID
    authorId: ID
    topic: String
    content: String
    videoUrl: String
  }

  " Mutation: "
  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
  }

  type IncrementTrackViewsResponse {
    code: Int!
    success: Boolean!
    message: String!
    track: Track
  }
`;
module.exports = typeDefs;
