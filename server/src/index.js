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

(async function () {
  const { url, port } = await server.listen({ port: process.env.PORT || 4000 });
  console.log(`Server is listening on port ${port} Query at ${url}`);
})();
