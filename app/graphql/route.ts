import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { join } from "path";
import { readFileSync } from "fs";
import { prisma } from "@/prisma/prisma";
import { resolvers } from "@/lib/graphql/resolvers";
import {
  typeDefs as scalarTypeDefs,
  resolvers as scalarResolvers,
} from "graphql-scalars";
import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const typeDefs = readFileSync(
  join(process.cwd(), "lib", "graphql", "schema.graphql"),
  {
    encoding: "utf-8",
  }
);

interface ApolloContext {
  prisma: PrismaClient;
}

const server = new ApolloServer<ApolloContext>({
  typeDefs: [...scalarTypeDefs, typeDefs],
  resolvers: {
    ...scalarResolvers,
    ...resolvers,
  },
});

// req has the type NextRequest
const handler = startServerAndCreateNextHandler<NextRequest, ApolloContext>(
  server,
  { context: async (req) => ({ req, prisma }) }
);

export async function GET(request: Request) {
  return handler(request);
}

export async function POST(request: Request) {
  return handler(request);
}
