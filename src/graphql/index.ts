import { gql } from "@apollo/client/core";

const ALL_THOUGHTS = gql`
  query {
    allThoughts(_size: 2) {
      data {
				_id
        title
      }
    }
    
  }
`;

export { ALL_THOUGHTS };
