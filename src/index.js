import { GraphQLServer } from 'graphql-yoga';

// type definition (schema)

const typeDefs = `type Query {
    hello: String!
}`;

// Resolvers

const resolvers = {
  Query: {
    hello() {
      return 'this is my fist query';
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log('The server is Up');
});
