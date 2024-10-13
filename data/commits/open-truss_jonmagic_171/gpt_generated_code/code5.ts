// pages/api/[...graphql].ts
import { createYoga, YogaContext } from '@graphql-yoga/node';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { IResolvers } from './types/generated-types';

const typeDefs = /* GraphQL */ `
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

const resolvers: IResolvers<YogaContext> = {
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

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = createYoga({
  schema,
  graphiql: true
});

export default server;