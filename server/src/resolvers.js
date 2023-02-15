const resolvers = {
  Query: {
    // (parent, args, context, info) => Track[]
    tracksForHome: (parent, args, context, info) => {
      // we can get access to trackAPI
      const { dataSources } = context;
      // if we add fetching author logic here, this resolver will be too coupled
      return dataSources.trackAPI.getTracksForHome();
    },
    track: (parent, args, context, info) => {
      const { dataSources } = context;
      const { id } = args; // from schema
      return dataSources.trackAPI.getTrack(id);
    },
  },
  Track: {
    author: (parent, args, context, info) => {
      const { authorId } = parent;
      const { dataSources } = context;
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModule(id);
    },
  },
};

module.exports = resolvers;
