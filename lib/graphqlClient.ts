import { GraphQLClient } from "graphql-request";

export const graphqlClient = new GraphQLClient(process.env.NODE_ENV !== 'production' ? 'http://localhost:3000/api/graphql' : 'https://www.chayhuixiang.com/api/graphql');
