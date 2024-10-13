// pages/api/[...graphql].js
import { createYoga } from '@graphql-yoga/node';
import { makeExecutableSchema } from '@graphql-tools/schema';

// GraphQL Schema Definition
const typeDefs = `
type HelloInput {
  name: String!
}

type HelloResponse {
  message: String!
}

type Mutation {
  hello(input: HelloInput!): HelloResponse!
}

type Query {
  hello: HelloResponse!
}

type Subscription {
  hello: HelloResponse!
}
`;

// Resolvers define the technique for fetching the types in the schema.
const resolvers = {
  Query: {
    hello: () => ({ message: "Hello World!" }),
  },
  Mutation: {
    hello: (_, { input }) => {
      return { message: `Hello ${input.name}!` };
    },
  },
  Subscription: {
    hello: {
      subscribe: (_, __, { pubsub }) => {
        // Dummy subscription (you will need to implement logic for subscriptions to work properly)
        setInterval(() => pubsub.publish("hello", { hello: { message: "Hello every second!" } }), 1000);
        return pubsub.asyncIterator("hello");
      },
    },
  },
};

// Create an executable schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Create the GraphQL server
const server = createYoga({
  schema,
  graphiql: {
    defaultQuery: `# Welcome to GraphQL Yoga
# Try running a query here
query {
  hello {
    message
  }
}`
});

// Next.js API handler
export default server;