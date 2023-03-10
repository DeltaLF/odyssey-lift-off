const { RESTDataSource } = require("apollo-datasource-rest");

class TrackAPI extends RESTDataSource {
  constructor() {
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
  getTrack(trackId) {
    return this.get(`track/${encodeURIComponent(trackId)}`);
  }
  getTrackModule(trackId) {
    // get modules from given trackId
    return this.get(`track/${encodeURIComponent(trackId)}/modules`);
  }
  getModule(moduleId) {
    // get deatils of single module
    return this.get(`module/${encodeURIComponent(moduleId)}`);
  }
  incrementTrackViews(trackId) {
    return this.patch(`track/${encodeURIComponent(trackId)}/numberOfViews`);
  }
}

module.exports = TrackAPI;
