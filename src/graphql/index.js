import { gql } from "@apollo/client/core";

const EXCHANGE_RATES = gql`
  query {
    allThoughts(_size: 2) {
      data {
        title
      }
    }
  }
`;
export { EXCHANGE_RATES };
