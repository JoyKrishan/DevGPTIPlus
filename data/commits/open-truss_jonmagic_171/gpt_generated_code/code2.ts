// pages/api/[...graphql].ts
import { createYoga } from '@graphql-yoga/node';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { IResolvers } from '../../types/generated-types';  // Adjust path as necessary

// Load and build the executable schema from the external .graphql file
const schemaFilePath = 'pages/api/schema.graphql'; // Path to your GraphQL schema file
const typeDefs = loadSchemaSync(schemaFilePath, { loaders: [new GraphQLFileLoader()] });

// Define resolvers
const resolvers: IResolvers = {
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

export default server;