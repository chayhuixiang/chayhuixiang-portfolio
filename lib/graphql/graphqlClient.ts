import { GraphQLClient } from "graphql-request";

const GQL_ENDPOINT =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000/graphql"
    : "https://chayhuixiang-portfolio.vercel.app/graphql";
export const graphqlClient = new GraphQLClient(GQL_ENDPOINT);
