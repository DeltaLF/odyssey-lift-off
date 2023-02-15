const resolvers = {
  Query: {
    // (parent, args, context, info) => Track[]
    tracksForHome: (parent, args, context, info) => {
      // we can get access to trackAPI
      const { dataSources } = context;
      // if we add fetching author logic here, this resolver will be too coupled
      return dataSources.trackAPI.getTracksFromHome();
    },
  },
  Track: {
    author: (parent, args, context, info) => {
      const { authorId } = parent;
      const { dataSources } = context;
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};

module.exports = resolvers;
