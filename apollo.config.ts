// apollo.config.js
module.exports = {
  client: {
    service: {
      name: "my-app",
      // URL to the GraphQL API
      url: "https://graphql.us.fauna.com/graphql",
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.js"],
  },
};
