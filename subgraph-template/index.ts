import { ApolloServer } from 'apollo-server';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

const server = new ApolloServer({
  schema: buildSubgraphSchema({
    typeDefs,
    resolvers
  })
});

server.listen(4000)
  .then(({ url }) => {
    console.log(`Subgraph listening at ${ url }`);
  })
  .catch(err => {
    console.error(err.message, err);
  });
