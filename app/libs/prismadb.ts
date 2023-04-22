import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();
// best practice with next 13, to avoid create more and more clients with hot-reload.
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;
