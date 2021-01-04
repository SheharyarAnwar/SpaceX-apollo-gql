import gql from "graphql-tag";
export const GET_ALL_MISSIONS = gql`
  query missions {
    missions {
      manufacturers
      mission_id
      mission_name
    }
  }
`;
export const GET_INDIVIDUAL_LAUNCH = gql`
  query mission($id: String!) {
    mission(id: $id) {
      description
      wikipedia
      website
    }
  }
`;
