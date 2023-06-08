import { GraphQLServer } from 'graphql-yoga';

// type definition (schema)

// const typeDefs = `type Query {
//     product: Product!
//     }
//    type Product {
//     id: ID!
//     title: String!
//     price: Float!
//     releaseYear: Int
//     rating: Float
//     inStock: Boolean!
// }`;

// Operational Arguments

const typeDefs = `type Query {
  greeting(name: String): String!
  grades: [Int!]
}`;

// Resolvers

// const resolvers = {
//   Query: {
//     product() {
//       return {
//         id: 12,
//         title: 'test title',
//         price: 100,
//         releaseYear: 2023,
//         rating: 4.5,
//         inStock: true,
//       };
//     },
//   },
// };

const resolvers = {
  Query: {
    greeting(parent, args, ctx, info) {
      if (args.name) {
        return `Hello, ${args.name}`;
      } else {
        return 'Hello!';
      }
    },
    grades() {
      return [10, 15, 40];
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
