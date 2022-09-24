import { ApolloServer } from 'apollo-server';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(3000)
  .then(({ url }) => {
    console.log(`Server listening at ${ url }`);
  })
  .catch(err => {
    console.error(err.message, err);
  });
