import React from "react";
import { Layout } from "../components";
import { gql, useQuery } from "@apollo/client";
import TrackCard from "../containers/track-card";
import QueryResult from "../components/query-result";
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const TRACKS = gql`
  query GetTracks {
    # name of the query
    tracksForHome {
      # select schema
      title
      length
      id
      modulesCount
      thumbnail
      author {
        photo
        name
        id
      }
    }
  }
`;

const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);
  // if (loading) return "Loading...";
  // if (error) return `Error! ${error.message}`;
  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksForHome?.map((track, ind) => {
          return <TrackCard key={track.id + ind} track={track} />;
        })}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
