import { GraphQLServer } from 'graphql-yoga';

// type definition (schema)

const typeDefs = `type Query {
    hello: String!
    title: String!
    price: Float!
    releaseYear: Int
    ratting: Float
    inStock: Boolean!
}`;

// Resolvers

const resolvers = {
  Query: {
    hello() {
      return 'this is my fist query';
    },
    title() {
      return 'The way of life';
    },
    price() {
      return 12.55;
    },
    releaseYear() {
      return 2020;
    },
    ratting() {
      return 4.5;
    },
    inStock() {
      return true;
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
