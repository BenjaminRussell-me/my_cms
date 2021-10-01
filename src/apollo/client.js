import { ApolloClient, HttpLink } from "@apollo/client/core";
import { InMemoryCache } from "@apollo/client/cache";

const token = "";
const httpLink = new HttpLink({
  uri: "https://graphql.us.fauna.com/graphql",
  headers: {
    authorization: token ? `Bearer ${token}` : "",
  },
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default apolloClient;
