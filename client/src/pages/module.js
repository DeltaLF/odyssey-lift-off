import React from "react";
import ModuleDetail from "../components/module-detail";
import { gql, useQuery } from "@apollo/client";
import { QueryResult, Layout } from "../components";
/*
what we need in this route:
track{title,module{title, id, length}}
module{videoUrl, title, content, id}
*/
const GET_TRACK_AND_MODULE = gql`
  query GetTrackAndModule($trackId: ID!, $moduleId: ID!) {
    track(id: $trackId) {
      title
      modules {
        title
        id
        length
      }
    }
    module(id: $moduleId) {
      videoUrl
      title
      content
      id
    }
  }
`;

function Module({ trackId, moduleId }) {
  const { data, loading, error } = useQuery(GET_TRACK_AND_MODULE, {
    variables: { trackId, moduleId },
  });
  return (
    <Layout>
      <QueryResult loading={loading} error={error} data={data}>
        <ModuleDetail track={data?.track} module={data?.module} />;
      </QueryResult>
    </Layout>
  );
}

export default Module;
