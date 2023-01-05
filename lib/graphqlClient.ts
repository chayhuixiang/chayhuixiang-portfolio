import { GraphQLClient } from "graphql-request";
import { getAbsoluteUrl } from "../utils/getAbsoluteUrl";

// const GQL_ENDPOINT = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000/api/graphql' : 'https://chayhuixiang-portfolio.vercel.app/api/graphql';
const absoluteUrl = getAbsoluteUrl();
const GQL_ENDPOINT = `${absoluteUrl}/api/graphql`
console.log(GQL_ENDPOINT);
export const graphqlClient = new GraphQLClient(GQL_ENDPOINT);
