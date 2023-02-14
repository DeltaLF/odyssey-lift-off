const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const { mocks } = require("./mocks/index");

const server = new ApolloServer({ typeDefs: typeDefs, mocks: mocks });

server.listen().then(() => {
  console.log(
    "server is running on port 4000m query at http://localhost:4000 "
  );
});
