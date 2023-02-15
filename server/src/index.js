const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const { mocks } = require("./mocks/index");
const resolvers = require("./resolvers");
const TrackAPI = require("./datasource/track-api");

const server = new ApolloServer({
  typeDefs: typeDefs,
  // mocks: mocks,
  resolvers: resolvers,
  dataSources: () => {
    return {
      trackAPI: new TrackAPI(),
    };
  },
});

server.listen().then(() => {
  console.log("server is running on port 4000 query at http://localhost:4000 ");
});
