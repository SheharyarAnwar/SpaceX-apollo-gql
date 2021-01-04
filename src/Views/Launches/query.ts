import gql from "graphql-tag";

export const GET_ALL_LAUNCHES = gql`
  query Launches($limit: Int, $offset: Int) {
    launches(limit: $limit, offset: $offset) {
      is_tentative
      flight_number
      mission_name
      rocket {
        rocket_name
      }
      launch_success
      launch_year
    }
  }
`;
export const GET_INDIVIDUAL_LAUNCH = gql`
  query launch($id: String!) {
    launch(id: $id) {
      details
      rocket {
        rocket_name
      }
      links {
        article_link
        video_link
      }
    }
  }
`;
