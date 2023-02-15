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
  Mutation: {
    incrementTrackViews: async (_, { id }, { dataSources }) => {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(id);
        // there are some extra properties defined in schema
        return {
          code: 200,
          success: true,
          message: "increase successfully",
          track,
        };
      } catch (error) {
        const { response } = error.extensions;
        return {
          code: response.status,
          success: false,
          message: response.body,
          track: null,
        };
      }
    },
  },
};

module.exports = resolvers;
