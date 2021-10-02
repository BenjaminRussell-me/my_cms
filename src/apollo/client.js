import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";

const token = "fnAEUZoXjbAARHwdLylQAlTW8xBg57CnDwYpVWzm";
// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "https://graphql.us.fauna.com/graphql",
  headers: {
    authorization: token ? `Bearer ${token}` : "",
  },
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

export default apolloClient;
