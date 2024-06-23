// import { PrismaClient } from '@prisma/client'

// const prismaClientSingleton = () => {
//   return new PrismaClient()
// }

// declare const globalThis: {
//   prismaGlobal: ReturnType<typeof prismaClientSingleton>;
// } & typeof global;

// const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

// export default prisma

// if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma

import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient | undefined;

try {
  prisma = new PrismaClient();
} catch (error) {
  console.error('Failed to initialize Prisma Client:', error);
}

export default prisma;