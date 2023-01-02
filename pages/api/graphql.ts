import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { join } from 'path';
import { readFileSync } from 'fs';
import { prisma } from '../../lib/prisma';
import { resolvers } from './resolvers';
import {
  typeDefs as scalarTypeDefs,
  resolvers as scalarResolvers,
} from 'graphql-scalars'
import { PrismaClient } from '@prisma/client';

const typeDefs = readFileSync(join(process.cwd(), 'pages', 'api', 'schemas', 'schema.graphql'), {
  encoding: 'utf-8'
});

interface ApolloContext {
  prisma: PrismaClient;
}

const server = new ApolloServer<ApolloContext>({
  typeDefs: [
    ...scalarTypeDefs,
    typeDefs
  ],
  resolvers: {
    ...scalarResolvers,
    ...resolvers
  },
});

export default startServerAndCreateNextHandler(server, {
  context: async (req, res) => ({ req, res, prisma })
});
