import { GraphQLServer } from 'graphql-yoga';

// type definition (schema)

const typeDefs = `type Query {
    product: Product!
    }
   type Product {
    id: ID!
    title: String!
    price: Float!
    releaseYear: Int
    rating: Float
    inStock: Boolean!
}`;
// Resolvers

const resolvers = {
  Query: {
    product() {
      return {
        id: 12,
        title: 'test title',
        price: 100,
        releaseYear: 2023,
        rating: 4.5,
        inStock: true,
      };
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
