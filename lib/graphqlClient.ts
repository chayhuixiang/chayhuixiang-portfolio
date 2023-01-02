import { GraphQLClient } from "graphql-request";

export const graphqlClient = new GraphQLClient(`${process.env.URL}/api/graphql`);
