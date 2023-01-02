import { GraphQLClient } from "graphql-request";

const GQL_ENDPOINT = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000/api/graphql' : `https://www.chayhuixiang.com/api/graphql`;
export const graphqlClient = new GraphQLClient(GQL_ENDPOINT);
