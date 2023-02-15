const { RESTDataSource } = require("apollo-datasource-rest");

class TrackAPI extends RESTDataSource {
  context() {
    super();
    this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
  }
  getTracksForHome() {
    // get methods provided from RESTDataSource class
    return this.get("tracks");
  }
  getAuthor(authorId) {
    return this.get(`author/${encodeURIComponent(authorId)}`);
  }
}

module.expoets = TrackAPI;
