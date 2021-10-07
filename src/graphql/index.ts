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

const GET_BY_ID = gql`
	query {
		ThoughtsById(_id: 123){
			data {
				title
				content
			}
		}
	}
`;

export { ALL_THOUGHTS, GET_BY_ID };
